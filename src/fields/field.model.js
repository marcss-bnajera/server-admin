'use strict';

import mongoose from "mongoose";

const fieldSchema = new mongoose.Schema({
    fieldName: {
        type: String,
        required: true,
        trim: true,
        maxLength: [100, 'El nombre del campo no puede tener mas de 100 caracteres'],
    },
    fieldType: {
        type: String,
        required: [true, 'El tipo de campo es obligatorio'],
        enum: {
            values: ['NATURAL', 'SINTETICA', 'CONCRETO'],
        },
    },
    capacity: {
        type: String,
        required: [true, 'La capacidad del campo es obligatoria'],
        enum: {
            values: ['FUTBOL_5', 'FUTBOL_7', 'FUTBOL_11'],
            message: 'Capacidad no valida',
        },
    },
    pricePerHour: {
        type: Number,
        required: [true, 'El precio por hora es obligatorio'],
        min: [0, 'El precio por hora no puede ser negativo'],
    },
    description: {
        type: String,
        trim: true,
        maxLength: [500, 'La descripcion no puede tener mas de 500 caracteres'],
    },
    photo: {
        type: String,
        //valor por defecto
        default: 'fields/kinal_sport_nyvxo5',
    },
    isActive: {
        type: Boolean,
        default: true,
    },
});

// Indices para optimizar la busqueda
fieldSchema.index({isActive: 1});
fieldSchema.index({fieldName: 1});
fieldSchema.index({fieldName: 1, isActive: 1});

//exportamos el modelo con el nombre Field
export default mongoose.model('Field', fieldSchema);
