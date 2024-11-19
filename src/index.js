
import UsersRoute from "./routes/users.route.js";
import PeliculasRoute from "./routes/peliculas.route.js";
import express from "express"
import MongoConnection from "./models/MogoConnection.js"
import generator from "./utils/userGenerator.js"



const app = express()
const PORT = 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/users",new UsersRoute().start())
app.use("/peliculas",new PeliculasRoute().start())


app.on("ERROR",(error)=>console.log("Error: ",error))

await MongoConnection.connect()
app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`)) 
app.on("Error", (err) => console.error(err))



/*
import config from './server.js';

console.log('PORT:', config.PORT); // Verificar si las variables de entorno se están cargando correctamente
console.log('STRC:', config.STRC);
console.log('NAMEBASE:', config.NAMEBASE);
console.log('PERSISTENCE:', config.PERSISTENCE);

import UsersRoute from "./routes/users.route.js";
import PeliculasRoute from "./routes/peliculas.route.js";
import express from "express";
import MongoConnection from "./models/MogoConnection.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", new UsersRoute().start());
app.use("/", new PeliculasRoute().start());

app.on("ERROR", (error) => console.log("Error: ", error));

await MongoConnection.connect();
app.listen(config.PORT, () => console.log(`Server running on: http://localhost:${config.PORT}`));
app.on("Error", (err) => console.error(err));
*/