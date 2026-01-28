'use strict';

//Importaciones
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { corsOptions } from './cors-configuration.js';
import { version } from 'mongoose';

//Rutas
import fieldRoutes from '../src/fields/field.router.js'

const BASE_URL = '/kinalSportAdmin/v1';

// Configuracion de los middlewares
const middlewares = (app) => {
    //Permite recibir datos en formato urlencoded
    app.use(express.urlencoded({ extended: false, limit: '10mb' }));
    //Permite recibir datos en formato json
    app.use(express.json({ limit: '10mb' }));
    //Permite configurar las cabeceras de las peticiones HTTP
    app.use(cors(corsOptions));
    //Permite el uso de morgan en modo desarrollo
    app.use(morgan('dev'));
}

//Integracion de todas las rutas
const routes = (app) => {
    app.use(`${BASE_URL}/fields`, fieldRoutes);
}

//funcion para iniciar el servidor
const initServer = async (app) => {
    // Crear la instancia de la aplicacion
    app = express();
    const PORT = process.env.PORT || 3001;
    
    try {
        //Configuracion de los middlewares (Mi aplicaion)
        middlewares(app);
        routes(app);

        app.listen(PORT, () => {
            console.log(`Servidor iniciado en el puerto ${PORT}`);
            console.log(`URL BASE: http://localhost:${PORT}${BASE_URL}`);
        });

        // Primera ruta
        app.get(`${BASE_URL}/health`, (req, res) => {
            res.status(200).json(
                {
                    status: 'ok',
                    service: 'KinalSport Admin',
                    version: '1.0.0'
                }
            );
        });

    } catch (error) {

        console.log(error);

    }
}

export { initServer };