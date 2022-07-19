//valentin
const { Router } = require('express');
const { mostarContratos, borrarContrato, actualizarContrato } = require('../controllers/contratos');

const { crearContrato, mostrarContratosPorIdUsuario } = require('../controllers').Contrato;


const router = Router();

router.post('/:idU/:idT', crearContrato)
router.get("/:idU", mostrarContratosPorIdUsuario)
router.get("/", mostarContratos);
router.delete("/:idU", borrarContrato);
router.put("/:idU", actualizarContrato);

module.exports = router;