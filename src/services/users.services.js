import UsersFactory from "../models/users.factory.js";
import server from "../server.js";
import { validateUser } from "./validate/schema.js";
import sendEmail from "../utils/emailer.js"

class UsersServices {
  constructor() {
    this.usersFactory = UsersFactory.get(server.PERSISTENCE);
  }

  getUsers = async () => {
    return await this.usersFactory.getUsers();
  };

  registerUser = async (data) => {
    if (!validateUser(data)) {
      const response = await this.usersFactory.registerUser(data);
      console.log(response)
      const envio = sendEmail()
        console.log(envio)
      return "ok"
    }else{
      throw new Error("No se ha podido registrar")
    }
    
  };

  updateAllUser = async (id, data) => {
    return await this.usersFactory.updateAllUser(id, data);
  };

  updateSomethingUser = async (id, data) => {
    return await this.usersFactory.updateSomethingUser(id, data);
  };

  deleteUser = async (id) => {
    return await this.usersFactory.deleteUser(id);
  };
}

export default UsersServices