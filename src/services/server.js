//info sensible que no debería subirse al repositorio, debería añadirse este archivo al .gitignore
const PORT = process.env.PORT 
const STRC = process.env.STRC
const NAMEBASE = process.env.NAMEBASE
const PERSISTENCE = process.env.PERSISTENCE

export default {
    PORT,
    STRC,
    NAMEBASE,
    PERSISTENCE
}
