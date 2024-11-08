import PeliculasController from "../controllers/peliculas.controller.js"
import express from "express"

class PeliculasRoute {
    constructor() {
        this.routerPeliculas = express.Router()
        this.peliculasController = new PeliculasController()
    }

    start(){
        this.routerPeliculas.get("/peliculas",this.peliculasController.getPeliculas)
        this.routerPeliculas.post("/peliculas",this.peliculasController.registerPeliculas)
        this.routerPeliculas.put("/peliculas/updateAll/:id",this.peliculasController.updateAllPeliculas)
        this.routerPeliculas.patch("/peliculas/updateSomething/:id",this.peliculasController.updateSomethingPeliculas)
        this.routerPeliculas.delete("/peliculas/delete/:id",this.peliculasController.deletePeliculas)

        return this.routerPeliculas
    }
}

export default PeliculasRoute