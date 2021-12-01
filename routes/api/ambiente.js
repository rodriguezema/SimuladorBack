const router = require('express').Router();
const { Ambiente } = require('../../db')

// RECUPERA TODOS LOS AMBIENTES
router.get('/', async (req,res) => {
    const ambientes = await Ambiente.findAll()
    res.json(ambientes)
});

// CARGAR UN AMBIENTE
router.post('/', async (req,res) => {
    console.log(req.body);
    const ambiente = await Ambiente.create(req.body);
    
    if(res.statusCode == 200){
        res.json({status: res.statusCode, message: "Ambiente agregado."})
    }
    if(res.statusCode != 200){
        res.json({status: res.statusCode, message: "Error."})
    }
});

//MODIFICO UN AMBIENTE
router.put('/:idAmbiente', async (req,res) => {
    const ambiente = await Ambiente.update(req.body, {
        where: { id_ambiente: req.params.idAmbiente }
    })

    if(res.statusCode == 200){
        res.json({status: res.statusCode, message: "Ambiente modificado."})
    }
    if(res.statusCode != 200){
        res.json({status: res.statusCode, message: "Error."})
    }
});

//BORRO UN AMBIENTE
router.delete('/:idAmbiente', async (req,res) => {
    const ambiente = await Ambiente.destroy({
        where: { id_ambiente: req.params.idAmbiente }
    })
    if(res.statusCode == 200){
        res.json({status: res.statusCode, message: "Ambiente eliminado."})
    }
    if(res.statusCode != 200){
        res.json({status: res.statusCode, message: "Error."})
    }
});

module.exports = router;