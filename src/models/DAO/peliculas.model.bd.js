import MongoConnection from "../MogoConnection.js"
import { MongoClient, ObjectId } from "mongodb";

class PeliculasMongoModel{
    constructor(){ 
    }

    getPeliculas= async () => {
        const peliculas = await MongoConnection.db.collection("peliculas").find({}).toArray()
        return peliculas
    }
    
    postPeliculas = async (data) => {
        const newPelicula = await MongoConnection.db.collection("peliculas").insertOne(data)
        return { ...data, _id: newPelicula.insertedId };
    }
    registerPeliculas = async (data) => {
        const newPelicula = await MongoConnection.db.collection("peliculas").insertOne(data);
        return { ...data, _id: newPelicula.insertedId }; 
    }
    deletePeliculas = async (id) => {
        if (!ObjectId.isValid(id)) {
            throw new Error("ID inválido");
        }
        const result = await MongoConnection.db.collection("peliculas").deleteOne({ _id: ObjectId.createFromHexString(id) });
        return result.deletedCount > 0;
    }

    updateAllPeliculas = async (id, data) => {
        if (!ObjectId.isValid(id)) {
            throw new Error("ID inválido");
        }

        const result = await MongoConnection.db.collection("peliculas").replaceOne(
            { _id: ObjectId.createFromHexString(id)},
            data 
        );

        return result.modifiedCount > 0;
    }

    updateSomethingPeliculas = async (id, data) => {
        const result = await MongoConnection.db.collection("peliculas").updateOne(
            { _id: ObjectId.createFromHexString(id) }, 
            { $set: data } 
        );
        return result.modifiedCount > 0; 
    }

    
}

export default PeliculasMongoModel