import PeliculasModelMem from "./DAO/peliculas.model.mem.js"
import PeliculasMongoModel from "./DAO/peliculas.model.bd.js"
import PeliculasModelFs from "./DAO/peliculas.model.fs.js"

class PeliculasFactory{
    static get(persistence){

        switch (persistence) {
            case "MEM":
                console.log("Persistiendo en MEM")
                return new PeliculasModelMem()

                case "FS":
                    console.log("Persistiendo en FS")
                    return new PeliculasModelFs()
                case "DB":
                    console.log("Persistiendo en DB")
                    return new PeliculasMongoModel()
            default:
                console.log("Persistiendo en default")
                return new PeliculasModelMem()
        }

    }
}

export default PeliculasFactory