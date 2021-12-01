const router = require('express').Router();
const { Inmueble } = require('../../db')

// RECUPERA TODOS LOS INMUEBLES
router.get('/', async (req,res) => {
    const inmuebles = await Inmueble.findAll()
    res.json(inmuebles)
});

// CARGAR UN INMUEBLE
router.post('/', async (req,res) => {
    console.log(req.body);
    const inmueble = await Inmueble.create(req.body);
    
    if(res.statusCode == 200){
        res.json({status: res.statusCode, message: "Inmueble agregado."})
    }
    if(res.statusCode != 200){
        res.json({status: res.statusCode, message: "Error."})
    }
});

//MODIFICO UN INMUEBLE
router.put('/:idInmueble', async (req,res) => {
    const inmueble = await Inmueble.update(req.body, {
        where: { id_inmueble: req.params.idInmueble }
    })

    if(res.statusCode == 200){
        res.json({status: res.statusCode, message: "Inmueble modificado."})
    }
    if(res.statusCode != 200){
        res.json({status: res.statusCode, message: "Error."})
    }
});

//BORRO UN INMUEBLE
router.delete('/:idInmueble', async (req,res) => {
    const inmueble = await Inmueble.destroy({
        where: { id_inmueble: req.params.idInmueble }
    })
    if(res.statusCode == 200){
        res.json({status: res.statusCode, message: "Inmueble eliminado."})
    }
    if(res.statusCode != 200){
        res.json({status: res.statusCode, message: "Error."})
    }
});



module.exports = router;








