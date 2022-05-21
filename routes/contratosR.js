//valentin
const { Router } = require('express');

const { crearContrato } = require('../controllers').Contrato;

const { validacionCampos } = require("../middlewares");

const router = Router();

router.post('/:idU/:idT', crearContrato)

module.exports = router;