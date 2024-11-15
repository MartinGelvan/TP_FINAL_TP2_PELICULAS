import generator from "../utils/userGenerator.js"
import { expect } from "chai"
import supertest from "supertest"

const urlBase = supertest("http://localhost:8080")

//TEST DE INTEGRACION
describe('Test de users: ', () => {
    const data = generator.randomUser()

   


    it('GET Peliculas', async () => {
        const response = await urlBase.get("/peliculas").set('role', 'admin').send(data)
        
        expect(response.status).to.equal(200)
    })

    it('POST Peliculas', async () => {
        const response = await urlBase.post("/peliculas").set('role', 'admin').send(data)
        expect(response.status).to.equal(200)
    })

    it('DELETE Peliculas', async () => {
        const response = await urlBase.delete("/peliculas/delete/:id").set('role', 'admin').send(data)
        expect(response.status).to.equal(200)
    })

    it('PATCH Peliculas', async () => {
        const response = await urlBase.patch("/peliculas/updateSomething/:id").set('role', 'admin').send(data)
        expect(response.status).to.equal(200)
    })

    it('PUT Peliculas', async () => {
        const response = await urlBase.put("/peliculas/updateAll/:id").set('role', 'admin').send(data)
        expect(response.status).to.equal(200)
    })
})