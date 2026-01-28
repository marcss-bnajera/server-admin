// importamos las dependencias

import Field from "./field.model.js";

// Controles
export const getFields = async (req, res) => {
    try {
      // datos que vienen de la query
        const { page = 1, limit = 10, isActive } = req.query;
        
        // Variable que utilizaremos para filtrar
        // Como se realiza el filtro depende de si viene el isActive
        const filter = { isActive };

        // opciones de paginación
        const options = {
            //convertimos a numero
            page: parseInt(page),
            //convertimos a numero
            limit: parseInt(limit),
            sort: { createdAt: -1 }
        }

        //Realizar la consulta al Schema Field
        const fields = await Field.find(filter)
            .limit(limit)
            .skip((page - 1) * limit)
            .sort(options.sort);

        //conteo de documentos de la consulta
        const total = await Field.countDocuments(filter);

        // respuesta
        res.status(200).json({
            success: true,
            data: fields,
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(total / limit),
                totalRecords: total,
                limit: limit,
            }
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener los campos",
            error: error.message
        })
    }
};