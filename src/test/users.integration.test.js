import generator from "../utils/userGenerator.js"
import { expect } from "chai"
import supertest from "supertest"

const urlBase = supertest("http://localhost:8080") 
  

//TEST DE INTEGRACION
describe('Test de users: ', function() {
   
    this.timeout(10000000)
    const data = generator.randomPeli()
    let idRandom
    console.log("Dato Random: ", data)


    it('GET Peliculas', async () => {
        const response = await urlBase.get("/peliculas").set('role', 'admin')
        
        expect(response.status).to.equal(200)
    })

    it('POST Peliculas', async () => {
        const response = await urlBase.post("/peliculas").set('role','admin').send(data)
        idRandom=response.body._id
        expect(response.status).to.equal(200)
    })

    
    
    
    it('DELETE Peliculas', async () => {
        const response = await urlBase.delete(`/peliculas/delete/${idRandom}`).set('role', 'admin')
        expect(response.status).to.equal(200)
    })

    it('PATCH Peliculas', async () => {
        const response = await urlBase.patch(`/peliculas/updateSomething/${idRandom}`).set('role', 'admin').send(data)
        expect(response.status).to.equal(200)
    })

    it('PUT Peliculas', async () => {
        const response = await urlBase.put(`/peliculas/updateAll/${idRandom}`).set('role', 'admin').send(data)
        expect(response.status).to.equal(200)
    })
    
    
})