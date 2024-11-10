import PeliculasController from "../controllers/peliculas.controller.js"
import express from "express"

class PeliculasRoute {
    constructor() {
        this.routerPeliculas = express.Router()
        this.peliculasController = new PeliculasController()
    }

    start(){
        this.routerPeliculas.get("/",this.peliculasController.getPeliculas)
        this.routerPeliculas.post("/",this.peliculasController.registerPeliculas)
        this.routerPeliculas.put("/updateAll/:id",this.peliculasController.updateAllPeliculas)
        this.routerPeliculas.patch("/updateSomething/:id",this.peliculasController.updateSomethingPeliculas)
        this.routerPeliculas.delete("/delete/:id",this.peliculasController.deletePeliculas)

        return this.routerPeliculas
    }
}

export default PeliculasRoute