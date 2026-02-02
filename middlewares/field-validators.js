import { body, param } from 'express-validator';
import { checkValidators } from './check-validators.js';

export const validateCreateField = [
    body('fieldName')
        .trim()
        .notEmpty()
        .withMessage('El nombre del campo es obligatorio')
        .isLength({ min: 2, max: 100 })
        .withMessage('El nombre del campo debe tener entre 2 y 100 caracteres'),
    body('fieldType')
        .trim()
        .notEmpty()
        .withMessage('El tipo de campo es obligatorio')
        .isIn(['NATURAL', 'SINTETICA', 'CONCRETO'])
        .withMessage('El tipo de campo debe ser NATURAL, SINTETICA o CONCRETO'),
    body('capacity')
        .notEmpty()
        .withMessage('La capacidad es requerida')
        .isIn(['FUTBOL_5', 'FUTBOL_7', 'FUTBOL_11'])
       .withMessage('Capacidad no valida'),
    body('pricePerHour')
        .notEmpty()
        .withMessage('El precio por hora es requerido')
        .isFloat({ min: 0 })
        .withMessage('El precio debe ser mayor o igual a 0'),
    body('description')
        .optional()
        .trim()
        .isLength({ max: 500 })
        .withMessage('La descripción no puede exceder 500 caracteres'),
    checkValidators
];