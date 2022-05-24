const { validationResult  } = require('express-validator');

const validacionTareas = (req,res, next)=>{
    const {idU} = req.params;

    if (!idU) {
        return res.status(401).json('EL parametro del id De usuario  es obligatorio')
    }

    next()
}

const validacionNuevaTarea = (req,res, next)=>{
    const { body } = req;

    if (body.nombreTarea === "" || regex.number.test(body.Tarea)) {
        return res
            .status(404)
            .json("El nombre no debe contener números, solo letras.");
    }

    if (body.descripcionTarea === "" || regex.number.test(body.Tarea)) {
        return res
            .status(404)
            .json("La descripcion no debe contener números, solo letras.");
    }
    
    if (
        body.fechaTarea === "" ||
        !moment(body.fechaTarea, "YYYY-MM-DD", true).isValid()
    ) {
        return res
            .status(404)
            .json("Por favor ingrese una fecha válida en formato (YYYY-MM-DD)");
        }
    
    next();
}

module.exports = {
    validacionTareas,
    validacionNuevaTarea,
}