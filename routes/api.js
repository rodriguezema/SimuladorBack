const router = require('express').Router();

const apiInmuebles = require('./api/inmuebles');
const apiUsuarios = require('./api/usuarios');
const apiArtefactos = require('./api/artefactos');
const apiAmbientes = require('./api/ambiente');

router.use('/inmuebles', apiInmuebles);
router.use('/usuarios', apiUsuarios);
router.use('/artefactos', apiArtefactos);
router.use('/ambientes', apiAmbientes);

module.exports = router;