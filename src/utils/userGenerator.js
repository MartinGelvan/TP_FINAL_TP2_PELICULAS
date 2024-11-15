import { faker } from '@faker-js/faker'

const randomUser = () => {
    const user = {
        name: faker.person.firstName(),
        mail: faker.internet.email(),
        password: faker.internet.password()
    }

    return user
}


export default {
    randomUser
  
}