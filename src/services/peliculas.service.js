import axios from 'axios'; 
import PeliculasFactory from "../models/peliculas.factory.js"; // Tu fábrica de persistencia
import server from "../server.js";

class PeliculasServices {
  constructor() {
    this.peliculasFactory = PeliculasFactory.get(server.PERSISTENCE);
  }

  getPeliculas = async () => {
    if (server.PERSISTENCE !== "DB") {
      return await this.peliculasFactory.getPeliculas();
    }

    try {
      const page = 1; // Número de página para paginación
      const language = 'es'; // Idioma de las películas (español)
      const apiKey = process.env.TMDB_API_KEY; // Asegúrate de tener la clave de API en el archivo .env

      const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
        params: {
          api_key: apiKey,  
          page: page,      
          language: language 
        }
      });

      return response.data.results;  
    } catch (error) {
      console.error('Error al obtener las películas desde TMDb:', error);
      throw new Error('Error al obtener las películas desde TMDb');
    }
  };

  // Método para registrar una película en la base de datos
  registerPeliculas = async (data) => {
    return await this.peliculasFactory.registerPeliculas(data);
  };

  // Método para actualizar todas las propiedades de una película
  updateAllPeliculas = async (id, data) => {
    return await this.peliculasFactory.updateAllPeliculas(id, data);
  };

  // Método para actualizar algunas propiedades de una película
  updateSomethingPeliculas = async (id, data) => {
    return await this.peliculasFactory.updateSomethingPeliculas(id, data);
  };

  // Método para eliminar una película de la base de datos
  deletePeliculas = async (id) => {
    return await this.peliculasFactory.deletePeliculas(id);
  };
}

export default PeliculasServices;
