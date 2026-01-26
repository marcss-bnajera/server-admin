'use strict';

const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true,
        trim: true,
        maxLength: [100, 'El nombre del equipo no puede tener mas de 100 caracteres'],
    },
    coachName: {
        type: String,
        required: [true, 'El nombre del entrenador es obligatorio'],
        trim: true,
        maxLength: [100, 'El nombre del entrenador no puede tener mas de 100 caracteres'],
    },
    membersCount: {
        type: Number,
        required: [true, 'La cantidad de miembros es obligatoria'],
        min: [5, 'Un equipo debe tener al menos 5 miembros'],
        max: [25, 'Un equipo no puede tener mas de 25 miembros'],
    },
    captainOfTheTeam: {
        type: String,
        required: [true, 'El nombre del capitan es obligatorio'],
        trim: true,
        maxLength: [100, 'El nombre del capitan no puede tener mas de 100 caracteres'],
    },
    category: {
        type: String,
        required: [true, 'La categoria del equipo es obligatoria'],
        enum: {
            values: ['INFANTIL', 'JUVENIL', 'ADULTO'],
            message: 'Categoria no valida',
        },
    },
});