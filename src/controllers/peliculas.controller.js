import PeliculasServices from "../services/peliculas.service.js";

class PeliculasController {
    constructor() {
        this.peliculasServices= new PeliculasServices()
    }

    
  getPeliculas = async (req,res) => {
    const data =  await this.peliculasServices.getPeliculas()
    res.send(data)
  };

  registerPeliculas = async (req, res) => {
    try {
        const data = req.body;
        const newPelicula = await this.peliculasServices.registerPeliculas(data);
        res.status(201).json(newPelicula);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


  updateAllPeliculas = async (req,res) => {
    const {id} = req.params
    const data =  await this.peliculasServices.updateAllPeliculas(id,req.body)
    res.send(data)
  };

  updateSomethingPeliculas = async (req,res) => {
    const {id} = req.params
    const data =  await this.peliculasServices.updateSomethingPeliculas(id,req.body)
    res.send(data)
  };

  deletePeliculas = async (req,res) => {
    const {id} = req.params
    const data =  await this.peliculasServices.deletePeliculas(id)
    res.send(data)
  };
}

export default PeliculasController