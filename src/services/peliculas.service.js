import axios from 'axios'; 
import PeliculasFactory from "../models/peliculas.factory.js";
import server from "../server.js";

class PeliculasServices {
  constructor() {
    this.peliculasFactory = PeliculasFactory.get(server.PERSISTENCE);
  }

  // obtener películas desde la API y mapear solo los campos necesarios
  getPeliculas = async () => {
    if (server.PERSISTENCE !== "DB") {
      return await this.peliculasFactory.getPeliculas();
    }

    try {
      const page = 1; 
      const language = 'en';
      const apiKey = process.env.TMDB_API_KEY;

      const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
        params: {
          api_key: apiKey,  
          page: page,      
          language: language 
        }
      });

      // Mapeo de los campos
      const peliculasAPI = response.data.results.map(pelicula => ({
        id: pelicula.id,
        title: pelicula.title,
        description: pelicula.overview || 'Descripción no disponible', // Verificar existencia de descripción
        release_date: new Date(pelicula.release_date),
        createdAt: new Date(),
      }));

      const peliculasBD = await this.peliculasFactory.getPeliculas();
      const peliculasAPINoEnBD = peliculasAPI.filter(apiPelicula => !peliculasBD.some(dbPelicula => dbPelicula.id === apiPelicula.id) ); // Combinar las películas de la base de datos y las películas filtradas de la API 
      const peliculasTotales = [...peliculasBD, ...peliculasAPINoEnBD];

      return peliculasBD;  
    } catch (error) {
      console.error('Error al obtener las películas desde TMDb:', error);
      throw new Error('Error al obtener las películas desde TMDb');
    }
  };

  guardarPeliculasAPIEnBD = async (peliculas) => {
    let todasRegistradas = true; 
    for (const pelicula of peliculas) {
      const existe = await this.peliculasFactory.getPeliculas({ id: pelicula.id });
      if (!existe || existe.length === 0) {
        await this.peliculasFactory.registerPeliculas({
          id: pelicula.id,
          title: pelicula.title,
          description: pelicula.description,
          release_date: pelicula.release_date,
          createdAt: pelicula.createdAt,
        });
        console.log("Película guardada en la base de datos:", pelicula)
        todasRegistradas = false;
      }
    }
    if (todasRegistradas){
      console.log('Todas las películas ya están registradas en la base de datos.')
    }
  };

  registerPeliculas = async (data) => {
    const peliculas = await this.getPeliculas();
    await this.guardarPeliculasAPIEnBD(peliculas);
    const newPelicula=await this.peliculasFactory.registerPeliculas(data)
    return newPelicula;
  };

  updateAllPeliculas = async (id, data) => {
    return await this.peliculasFactory.updateAllPeliculas(id, data);
  };

  updateSomethingPeliculas = async (id, data) => {
    return await this.peliculasFactory.updateSomethingPeliculas(id, data);
  };

  deletePeliculas = async (id) => {
    return await this.peliculasFactory.deletePeliculas(id);
  };
}

export default PeliculasServices;
