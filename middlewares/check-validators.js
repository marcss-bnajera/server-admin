import { validationResult } from 'express-validator';

export const checkValidators = (req, res, next) => {
    // 1. Obtiene resultados de validación de express-validator
    const errors = validationResult(req);

    // 2. Si hay errores, retorna respuesta 400
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: 'Errores de validación',
            errors: errors.array().map((err) => ({
                field: err.path || err.param,
                message: err.msg,
            })),
        });
    }

    next();
};