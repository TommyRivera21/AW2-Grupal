const { validationResult  } = require('express-validator');

const validacionTareas = (req,res, next)=>{
    const {idU} = req.params;

    if (!idU) {
        return res.status(401).json('EL parametro del id De usuario  es obligatorio')
    }

    next()
}

module.exports = {
    validacionTareas
}