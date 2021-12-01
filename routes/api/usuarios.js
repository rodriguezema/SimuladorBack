const router = require('express').Router();
const { Usuario } = require('../../db')

// CARGAR UN USUARIO
router.post('/', async (req,res) => {
    console.log(req.body);
    const usuario = await Usuario.create(req.body);
    
    if(res.statusCode == 200){
        res.json({status: res.statusCode, message: "Usuario cargado."})
    }
    if(res.statusCode != 200){
        res.json({status: res.statusCode, message: "Error."})
    }
});

module.exports = router;