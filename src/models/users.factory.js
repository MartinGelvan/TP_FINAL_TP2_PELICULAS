import UsersModelMem from "./DAO/users.model.mem.js";
import UsersModelFs from "./DAO/users.model.fs.js";
import UserMongoModel from "./DAO/users.model.bd.js";
class UsersFactory{
    static get(persistence){

        switch (persistence) {
            case "MEM":
                console.log("Persistiendo en MEM")
                return new UsersModelMem()

                case "FS":
                    console.log("Persistiendo en FS")
                    return new UsersModelFs()
                case "DB":
                    console.log("Persistiendo en DB")
                    return new UserMongoModel()
            default:
                console.log("Persistiendo en default")
                return new UsersModelMem()
        }

    }
}

export default UsersFactory