const router = require('express').Router();
const { Simulacion } = require('../../db')


//RECUPERA TODAS LAS SIMULACIONES DE UN USUARIO
router.get('/:id', async (req,res) => {
    const simulacion = await Simulacion.findAll({
        where: {
            id_usuario: req.params.id
        }
    });
    res.json(simulacion)
});

// CARGAR UN AMBIENTE
// router.post('/', async (req,res) => {
//     console.log(req.body);
//     const ambiente = await Ambiente.create(req.body);
    
//     if(res.statusCode == 200){
//         res.json({status: res.statusCode, message: "Ambiente agregado."})
//     }
//     if(res.statusCode != 200){
//         res.json({status: res.statusCode, message: "Error."})
//     }
// });

module.exports = router;