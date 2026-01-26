'use strict';

const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    reservationName: {
        type: String,
        required: true,
        trim: true,
        maxLength: [100, 'El nombre de la reservacion no puede tener mas de 100 caracteres'],
    },
    reservationType: {
        type: String,
        required: [true, 'El tipo de reservacion es obligatorio'],
        enum: {
            values: ['PARTICULAR', 'GRUPAL'],
            message: 'Tipo de reservacion no valido',
        },
    },
    reservationDate: {
        type: Date,
        required: [true, 'La fecha de la reservacion es obligatoria'],
    },
    durationHours: {
        type: Number,
        required: [true, 'La duracion en horas es obligatoria'],
        min: [1, 'La duracion debe ser al menos de 1 hora'],
        max: [8, 'La duracion no puede exceder las 8 horas'],
    },
    typeOfField: {
        type: String,
        required: [true, 'El tipo de campo es obligatorio'],
        enum: {
            values: ['NATURAL', 'SINTETICA', 'CONCRETO'],
            message: 'Tipo de campo no valido',
        },
    },
    nameOfTheResponsible: {
        type: String,
        required: [true, 'El nombre del responsable es obligatorio'],
        trim: true,
        maxLength: [100, 'El nombre del responsable no puede tener mas de 100 caracteres'],
    },
    numberPhone: {
        type: String,
        required: [true, 'El numero telefonico es obligatorio'],
        trim: true,
        maxLength: [15, 'El numero telefonico no puede tener mas de 15 caracteres'],
    },
    typeOfPayment: {
        type: String,
        required: [true, 'El tipo de pago es obligatorio'],
        enum: {
            values: ['EFECTIVO', 'TARJETA_CREDITO', 'TARJETA_DEBITO'],
            message: 'Tipo de pago no valido',
        },
    },
});