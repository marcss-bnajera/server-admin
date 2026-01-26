'use strict';

const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
    tournamentName: {
        type: String,
        required: true,
        trim: true,
        maxLength: [100, 'El nombre del torneo no puede tener mas de 100 caracteres'],
    },
    startDate: {
        type: Date,
        required: [true, 'La fecha de inicio del torneo es obligatoria'],
    },
    endDate: {
        type: Date,
        required: [true, 'La fecha de finalizacion del torneo es obligatoria'],
    },
    numberOfTeams: {
        type: Number,
        required: [true, 'El numero de equipos es obligatorio'],
        min: [, 'El torneo debe tener al menos 2 equipos'],
        max: [64, 'El torneo no puede tener mas de 64 equipos'],
    },
    nameOfTheOrganizer: {
        type: String,
        required: [true, 'El nombre del organizador es obligatorio'],
        trim: true,
        maxLength: [100, 'El nombre del organizador no puede tener mas de 100 caracteres'],
    },
    nameOfTheTeams: {
        type: [String],
        validate: {
            validator: function (v) {
                return v.length === this.numberOfTeams;
            },
            message: 'La cantidad de nombres de equipos debe coincidir con el numero de equipos',
        },
    },
    location: {
        type: String,
        required: [true, 'La ubicacion del torneo es obligatoria'],
        trim: true,
        maxLength: [200, 'La ubicacion no puede tener mas de 200 caracteres'],
    },
    status: {
        type: String,
        enum: ['PENDIENTE', 'ACTIVO', 'COMPLETADO', 'CANCELADO'],
        default: 'PENDIENTE',
    },
    price: {
        type: Number,
        required: [true, 'El precio del torneo es obligatorio'],
        min: [0, 'El precio no puede ser negativo'],
    },
});
