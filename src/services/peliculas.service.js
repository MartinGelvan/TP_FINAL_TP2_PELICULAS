import PeliculasFactory from "../models/peliculas.factory.js";
import server from "../server.js";
//import { validateUser } from "./validate/schema.js";

class PeliculasServices {
  constructor() {
    this.peliculasFactory = PeliculasFactory.get(server.PERSISTENCE);
  }

  getPeliculas = async () => {
    return await this.peliculasFactory.getPeliculas();
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

export default PeliculasServices