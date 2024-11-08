//info sensible que no debería subirse al repositorio, debería añadirse este archivo al .gitignore
// server.js

const PORT = process.env.PORT;
const STRC = process.env.STRC;
const NAMEBASE = process.env.NAMEBASE;
const PERSISTENCE = process.env.PERSISTENCE;

export default {
  PORT,
  STRC,
  NAMEBASE,
  PERSISTENCE
};



/*
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar el archivo .env desde src/.env
const envPath = path.resolve(__dirname, '.env');
const envConfig = fs.readFileSync(envPath, 'utf-8').split('\n');
envConfig.forEach(line => {
  // Omitir líneas vacías o malformadas
  if (line.trim()) {
    const [key, value] = line.split('=');
    if (key && value) {
      process.env[key.trim()] = value.trim();
    }
  }
});

console.log('PORT:', process.env.PORT); // Verificar si las variables de entorno se están cargando correctamente
console.log('STRC:', process.env.STRC);
console.log('NAMEBASE:', process.env.NAMEBASE);
console.log('PERSISTENCE:', process.env.PERSISTENCE);

const config = {
  PORT: process.env.PORT,
  STRC: process.env.STRC,
  NAMEBASE: process.env.NAMEBASE,
  PERSISTENCE: process.env.PERSISTENCE
};

export default config;
*/