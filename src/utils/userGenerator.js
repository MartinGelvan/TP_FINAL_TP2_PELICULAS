import { faker } from '@faker-js/faker'
/*
const randomUser = () => {
    const user = {
        name: faker.person.firstName(),
        mail: faker.internet.email(),
        password: faker.internet.password()
    }

    return user
}
*/
const randomPeli = () => { 
    const peli={ 
        title: faker.lorem.words(3), 
        description: faker.lorem.sentences(2), 
        release_date: faker.date.past(20), 
        genre: faker.music.genre(), 
        director: faker.person.fullName() 
    }
    return peli
}
export default {
    randomPeli
  
}