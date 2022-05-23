const validacionCampos = require('../middlewares/validacionCampos')
const validacionTareas = require('./validacionTareas')



module.exports = {
    ...validacionCampos,
    ...validacionTareas
}