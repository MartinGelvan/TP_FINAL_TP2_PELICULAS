import axios from 'axios'; 
import PeliculasFactory from "../models/peliculas.factory.js";
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
      const page = 1; 
      const language = 'es';
      const apiKey = process.env.TMDB_API_KEY;

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

  registerPeliculas = async (data) => {
    return await this.peliculasFactory.registerPeliculas(data);
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
