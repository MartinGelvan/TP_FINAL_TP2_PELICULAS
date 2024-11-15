import PeliculasController from "../controllers/peliculas.controller.js"
import express from "express"
import { roleAuth } from "../middleware/roleAuth.js" 

class PeliculasRoute {
    constructor() {
        this.routerPeliculas = express.Router()
        this.peliculasController = new PeliculasController()
    }

    start(){
        this.routerPeliculas.get("/",roleAuth,this.peliculasController.getPeliculas)
        this.routerPeliculas.post("/",roleAuth,this.peliculasController.registerPeliculas)
        this.routerPeliculas.put("/updateAll/:id",roleAuth,this.peliculasController.updateAllPeliculas)
        this.routerPeliculas.patch("/updateSomething/:id",roleAuth,this.peliculasController.updateSomethingPeliculas)
        this.routerPeliculas.delete("/delete/:id",roleAuth,this.peliculasController.deletePeliculas)

        return this.routerPeliculas
    }
}

export default PeliculasRoute