import nodemailer from "nodemailer"

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

    sendEMail = async (mail) => {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'tp2trabajopractico@gmail.com',
                pass: 'vnmo xyrq ynaj shod'
            }
        });
        const mailOptions = {
            from: 'tp2trabajopractico@gmail.com',
            to: mail,
            subject: 'Registración exitosa',
            text: "Usted se ha registrado exitosamente"
        };
        transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        res.send('Email sent successfully');
    };


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