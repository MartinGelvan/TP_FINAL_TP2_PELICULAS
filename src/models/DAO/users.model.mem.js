import sendEmail from "../../utils/emailer.js"

class UsersModelMem {
    constructor() {
        this.users = [

            {id:1,name:"Lucas",mail:"lucas@gmail.com",password:"1234"},
            {id:2,name:"Sofia",mail:"sofi@gmail.com",password:"6666"}
        ]
    }

    getUsers = async () => {
        return await this.users
    }

    registerUser= async (data) => {
        const idNuevo = this.users[this.users.length - 1].id + 1
        data.id = idNuevo
        this.users.push(data)
        sendEmail(data.mail)
        return await data
    }

    updateAllUser = async (id,data) => {
        
        const index = this.users.findIndex(u => u.id == id)
        data.id = id
        this.users.splice(index,1,data)
        return await data
    }

    updateSomethingUser = async (id,data) => {
        
        const index = this.users.findIndex(u => u.id == id)
        const newUser = {...this.users[index],...data}
        this.users.splice(index,1,newUser)
        return await newUser
    }

    deleteUser = async (id) => {
        
        const index = this.users.findIndex(u => u.id == id)
        if(index == -1){
            throw new Error("Ese id no existe")
        }else{
            const deleteUser = this.users[index]
            this.users.splice(index,1)
            const msg = `Se elimino el elemento: ${JSON.stringify(deleteUser)}`
            return msg
        }
        
        
    }
}

export default UsersModelMem