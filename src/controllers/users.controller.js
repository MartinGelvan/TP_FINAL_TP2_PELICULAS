import UsersServices from "../services/users.services.js";
import sendEmail from "../utils/emailer.js"


class UsersController {
    constructor() {
        this.usersServices= new UsersServices()
    }

    
  getUsers = async (req,res) => {
    const data =  await this.usersServices.getUsers()
    res.send(data)
  };

  registerUser = async (req, res) => {
    try {
        const data = req.body;
        const newUser = await this.usersServices.registerUser(data);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

  updateAllUser = async (req,res) => {
    const {id} = req.params
    const data =  await this.usersServices.updateAllUser(id,req.body)
    res.send(data)
  };

  updateSomethingUser = async (req,res) => {
    const {id} = req.params
    const data =  await this.usersServices.updateSomethingUser(id,req.body)
    res.send(data)
  };

  deleteUser = async (req,res) => {
    const {id} = req.params
    const data =  await this.usersServices.deleteUser(id)
    res.send(data)
  };
}

export default UsersController