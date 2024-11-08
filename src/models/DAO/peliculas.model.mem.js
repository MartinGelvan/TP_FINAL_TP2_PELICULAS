class PeliculasModelMem {
    constructor() {
        this.peliculas = [

            {id:100,name:"El señor de los anillos"},
            {id:101,name:"El hobbit"}
        ]
    }

    getPeliculas = async () => {
        return await this.peliculas
    }

    registerPeliculas= async (data) => {
        const idNuevo = this.peliculas[this.peliculas.length - 1].id + 1
        data.id = idNuevo
        this.peliculas.push(data)
        return await data
    }

    updateAllPeliculas = async (id,data) => {
        
        const index = this.peliculas.findIndex(u => u.id == id)
        data.id = id
        this.peliculas.splice(index,1,data)
        return await data
    }

    updateSomethingPeliculas = async (id,data) => {
        
        const index = this.peliculas.findIndex(u => u.id == id)
        const newPelicula = {...this.peliculas[index],...data}
        this.peliculas.splice(index,1,newPelicula)
        return await newPelicula
    }

    deletePeliculas = async (id) => {
        
        const index = this.peliculas.findIndex(u => u.id == id)
        if(index == -1){
            throw new Error("Ese id no existe")
        }else{
            const deletePeli = this.peliculas[index]
            this.peliculas.splice(index,1)
            const msg = `Se elimino el elemento: ${JSON.stringify(deletePeli)}`
            return msg
        }
        
        
    }
}

export default PeliculasModelMem