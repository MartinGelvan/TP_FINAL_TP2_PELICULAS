import UsersController from "../controllers/users.controller.js"
import express from "express"

class UsersRoute {
    constructor() {
        this.routerUsers = express.Router()
        this.userController = new UsersController()
    }

    start(){
        this.routerUsers.get("/",this.userController.getUsers)
        this.routerUsers.post("/",this.userController.registerUser)
        this.routerUsers.put("/updateAll/:id",this.userController.updateAllUser)
        this.routerUsers.patch("/updateSomething/:id",this.userController.updateSomethingUser)
        this.routerUsers.delete("/delete/:id",this.userController.deleteUser)

        return this.routerUsers
    }
}

export default UsersRoute