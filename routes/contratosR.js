//valentin
const { Router } = require('express');

const { crearContrato, mostrarContratosPorIdUsuario } = require('../controllers').Contrato;


const router = Router();

router.post('/:idU/:idT', crearContrato)
router.get("/:idU", mostrarContratosPorIdUsuario)

module.exports = router;