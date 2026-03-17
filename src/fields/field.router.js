import { Router } from 'express';
import {
    getFields,
    getFieldById,
    createField,
    updateField,
    changeFieldStatus,
} from './field.controller.js';
import {
    validateCreateField,
    validateUpdateFieldRequest,
    validateFieldStatusChange,
    validateGetFieldById,
} from '../../middlewares/field-validators.js';
import { validateJWT } from '../../middlewares/validate-JWT.js';
import { uploadFieldImage } from '../../middlewares/file-uploader.js';
import { cleanupUploadedFileOnFinish } from '../../middlewares/delete-file-on-error.js';

const router = Router();

// Rutas GET
router.get('/', getFields);
router.get('/:id', validateGetFieldById, getFieldById);

// Rutas POST - Requieren autenticación
router.post(
    '/',
    validateJWT,
    uploadFieldImage.single('image'),
    cleanupUploadedFileOnFinish,
    validateCreateField,
    createField
);

// Rutas PUT - Requieren autenticación
router.put(
    '/:id',
    validateJWT,
    uploadFieldImage.single('image'),
    validateUpdateFieldRequest,
    updateField
);
router.put('/:id/activate', validateJWT, validateFieldStatusChange, changeFieldStatus);
router.put('/:id/deactivate', validateJWT, validateFieldStatusChange, changeFieldStatus);

export default router;