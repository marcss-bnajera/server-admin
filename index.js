//Importaciones
import dotenv from 'dotenv';
import { initServer } from './configs/app.js';

//Configuracion de variables de entorno
dotenv.config();

// errores no capturados
process.on('uncaughtException', (error) => {
    console.log(error);
    process.exit(1);
});

//Promesas rechazadas o no manejadas
process.on('unhandledRejection', (reason, promise) => {
    console.log(reason, promise);
    process.exit(1);
});

//Iniciar el servidor
console.log('Iniciando el servidor de KinalSport... ');
initServer();
