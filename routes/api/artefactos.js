const router = require('express').Router();
const { Artefacto } = require('../../db')

// RECUPERA TODOS LOS ARTEFACTOS
router.get('/', async (req,res) => {
    const artefactos = await Artefacto.findAll({
        include: {
            id_inmueble : Inmueble
        }
    })
    res.json(artefactos)
});

// CARGAR UN ARTEFACTO
router.post('/', async (req,res) => {
    console.log(req.body);
    const artefacto = await Artefacto.create(req.body);
    res.json({status: res.statusCode, message: "Artefacto agregado."})
});

//MODIFICO UN ARTEFACTO
router.put('/:idArtefacto', async (req,res) => {
    const artefacto = await Artefacto.update(req.body, {
        where: { id_artefacto: req.params.idArtefacto }
    })
    res.json({status: res.statusCode, message: "Artefacto modificado."}) 
});

//BORRO UN ARTEFACTO
router.delete('/:idArtefacto', async (req,res) => {
    const artefacto = await Artefacto.destroy({
        where: { id_artefacto: req.params.idArtefacto }
    })
    res.json({status: res.statusCode, message: "Artefacto eliminado."})
});

module.exports = router;