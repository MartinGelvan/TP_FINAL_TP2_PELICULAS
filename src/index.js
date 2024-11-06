import UsersRoute from "./routes/users.route.js";
import express from "express"
import MongoConnection from "./models/MogoConnection.js"

const app = express()
const PORT = 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/",new UsersRoute().start())


app.on("ERROR",(error)=>console.log("Error: ",error))

await MongoConnection.connect()
app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`))
app.on("Error", (err) => console.error(err))
