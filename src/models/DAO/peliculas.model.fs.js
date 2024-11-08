import fs from "fs";

class PeliculasModelFs {
    constructor() {
        this.peliculas = [];
        this.loadPeliculas();
    }

    loadPeliculas = async () => {
        if (fs.existsSync("peliculas.json")) {
            try {
                const data = await fs.promises.readFile("peliculas.json", 'utf8'); 
                this.peliculas = JSON.parse(data); 
                console.log("Usuarios cargados:", this.peliculas); 
            } catch (error) {
                console.error("Error al cargar usuarios:", error);
                this.peliculas = []; 
            }
        } else {
            this.peliculas = []; 
        }
    }

    savePeliculas = async () => {
        await fs.promises.writeFile("peliculas.json", JSON.stringify(this.peliculas), 'utf8'); 
    }

    getPeliculas = async () => {
        return this.peliculas; 
    }

    registerPeliculas = async (data) => {
        const idNuevo = this.peliculas.length > 0 ? this.peliculas[this.peliculas.length - 1].id + 1 : 1; 
        data.id = idNuevo;
        this.peliculas.push(data);
        await this.savePeliculas(); 
        return data;
    }

    updateAllPeliculas = async (id, data) => {
        const index = this.peliculas.findIndex(u => u.id == id);
        if (index !== -1) {
            data.id = id;
            this.peliculas.splice(index, 1, data);
            await this.savePeliculas();
            return data;
        } else {
            throw new Error("Ese id no existe");
        }
    }

    updateSomethingPeliculas = async (id, data) => {
        const index = this.peliculas.findIndex(u => u.id == id);
        if (index !== -1) {
            const newPelicula = { ...this.peliculas[index], ...data };
            this.peliculas.splice(index, 1, newPelicula);
            await this.savePeliculas();
            return newPelicula;
        } else {
            throw new Error("Ese id no existe");
        }
    }

    deletePeliculas = async (id) => {
        const index = this.peliculas.findIndex(u => u.id == id);
        if (index === -1) {
            throw new Error("Ese id no existe");
        } else {
            const deletePelicula = this.peliculas[index];
            this.peliculas.splice(index, 1);
            await this.savePeliculas(); 
            return `Se eliminó el elemento: ${JSON.stringify(deletePelicula)}`;
        }
    }
}

export default PeliculasModelFs;
