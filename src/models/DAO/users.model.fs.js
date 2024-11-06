import fs from "fs";

class UsersModelFs {
    constructor() {
        this.users = [];
        this.loadUsers();
    }

    loadUsers = async () => {
        if (fs.existsSync("users.json")) {
            try {
                const data = await fs.promises.readFile("users.json", 'utf8'); 
                this.users = JSON.parse(data); 
                console.log("Usuarios cargados:", this.users); 
            } catch (error) {
                console.error("Error al cargar usuarios:", error);
                this.users = []; 
            }
        } else {
            this.users = []; 
        }
    }

    saveUsers = async () => {
        await fs.promises.writeFile("users.json", JSON.stringify(this.users), 'utf8'); 
    }

    getUsers = async () => {
        return this.users; 
    }

    registerUser = async (data) => {
        const idNuevo = this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1; 
        data.id = idNuevo;
        this.users.push(data);
        await this.saveUsers(); 
        return data;
    }

    updateAllUser = async (id, data) => {
        const index = this.users.findIndex(u => u.id == id);
        if (index !== -1) {
            data.id = id;
            this.users.splice(index, 1, data);
            await this.saveUsers();
            return data;
        } else {
            throw new Error("Ese id no existe");
        }
    }

    updateSomethingUser = async (id, data) => {
        const index = this.users.findIndex(u => u.id == id);
        if (index !== -1) {
            const newUser = { ...this.users[index], ...data };
            this.users.splice(index, 1, newUser);
            await this.saveUsers();
            return newUser;
        } else {
            throw new Error("Ese id no existe");
        }
    }

    deleteUser = async (id) => {
        const index = this.users.findIndex(u => u.id == id);
        if (index === -1) {
            throw new Error("Ese id no existe");
        } else {
            const deleteUser = this.users[index];
            this.users.splice(index, 1);
            await this.saveUsers(); 
            return `Se eliminó el elemento: ${JSON.stringify(deleteUser)}`;
        }
    }
}

export default UsersModelFs;
