import { MongoClient } from "mongodb";

const uri = "mongodb+srv://tp2trabajopractico:UPCE10JqKwLijM2M@clustertp2.s6rii.mongodb.net/appPeliculas?retryWrites=true&w=majority&appName=ClusterTP2";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB successfully.");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
