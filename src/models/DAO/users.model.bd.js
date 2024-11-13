import MongoConnection from "../MogoConnection.js"
import { MongoClient, ObjectId } from "mongodb";

class UserMongoModel{
    constructor(){ 
    }

    getUsers= async () => {
        const users = await MongoConnection.db.collection("users").find({}).toArray()
        return users
    }
    
    postProd = async (data) => {
        const newProduct = await MongoConnection.db.collection("users").insertOne(data)
        return { ...data, _id: newUser.insertedId };
    }
    registerUser = async (data) => {
        const newUser = await MongoConnection.db.collection("users").insertMany(data);
        return { ...data, _id: newUser.insertedId }; 
    }
    deleteUser = async (id) => {
        if (!ObjectId.isValid(id)) {
            throw new Error("ID inválido");
        }
        const result = await MongoConnection.db.collection("users").deleteOne({ _id: ObjectId.createFromHexString(id) });
        return result.deletedCount > 0;
    }

    updateAllUser = async (id, data) => {
        if (!ObjectId.isValid(id)) {
            throw new Error("ID inválido");
        }

        const result = await MongoConnection.db.collection("users").replaceOne(
            { _id: ObjectId.createFromHexString(id)},
            data 
        );

        return result.modifiedCount > 0;
    }

    updateSomethingUser = async (id, data) => {
        const result = await MongoConnection.db.collection("users").updateOne(
            { _id: ObjectId.createFromHexString(id) }, 
            { $set: data } 
        );
        return result.modifiedCount > 0; 
    }

    
}

export default UserMongoModel