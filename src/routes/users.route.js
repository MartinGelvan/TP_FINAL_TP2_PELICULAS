import UsersController from "../controllers/users.controller.js"
import express from "express"

class UsersRoute {
    constructor() {
        this.routerUsers = express.Router()
        this.userController = new UsersController()
    }

    start(){
        this.routerUsers.get("/users",this.userController.getUsers)
        this.routerUsers.post("/users",this.userController.registerUser)
        this.routerUsers.put("/users/updateAll/:id",this.userController.updateAllUser)
        this.routerUsers.patch("/users/updateSomething/:id",this.userController.updateSomethingUser)
        this.routerUsers.delete("/users/delete/:id",this.userController.deleteUser)

        return this.routerUsers
    }
}

export default UsersRoute