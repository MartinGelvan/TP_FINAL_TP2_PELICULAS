import axios from 'axios'; // Importar axios para hacer solicitudes HTTP
import PeliculasFactory from "../models/peliculas.factory.js"; // Tu fábrica de persistencia
import server from "../server.js"; // Cargar la configuración del servidor

class PeliculasServices {
  constructor() {
    // Usar la fábrica para persistencia según el valor en el servidor
    this.peliculasFactory = PeliculasFactory.get(server.PERSISTENCE);
  }

  // Este método obtiene las películas de TMDb
  getPeliculas = async () => {
    // Si la persistencia es en memoria o en otro almacenamiento, usar la fábrica:
    if (server.PERSISTENCE !== "DB") {
      return await this.peliculasFactory.getPeliculas();
    }

    // Si la persistencia es en base de datos, obtén las películas de TMDb
    try {
      const page = 1; // Número de página para paginación
      const language = 'es'; // Idioma de las películas (español)
      const apiKey = process.env.TMDB_API_KEY; // Asegúrate de tener la clave de API en el archivo .env

      // Realizar la solicitud a la API de TMDb para obtener películas populares
      const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
        params: {
          api_key: apiKey,  // Usamos la clave de API
          page: page,       // Número de página para los resultados
          language: language // Idioma de las películas
        }
      });

      // Devolver los resultados obtenidos desde TMDb
      return response.data.results;  // Los resultados contienen las películas
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
