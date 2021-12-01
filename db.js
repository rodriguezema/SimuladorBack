const Sequelize = require('sequelize')

const Inmuebles = require('./models/inmuebles')
const Usuarios = require('./models/usuarios')
const Artefactos = require('./models/artefactos')
const Ambientes = require('./models/ambientes')


const sequelize = new Sequelize('sql10455143','sql10455143','caLhDMTKvd',{
    host: 'sql10.freesqldatabase.com',
    dialect: 'mysql',
})

const Usuario = Usuarios(sequelize,Sequelize);
const Inmueble = Inmuebles(sequelize,Sequelize);
const Artefacto = Artefactos(sequelize,Sequelize);
const Ambiente = Ambientes(sequelize,Sequelize);


//Creo la fk (Un inmueble tiene muchos artefactos, un artefacto pertenece a un inmueble)
// Artefacto.belongsTo(Inmueble,{foreignKey: 'id_inmueble'})
// Inmueble.hasMany(Artefacto, {foreignKey: 'id_inmueble'})


sequelize.sync({force: false})
    .then(()=> {
        console.log('Tablas Sincronizadas');
    })

module.exports = {
    Inmueble, Usuario, Artefacto, Ambiente
}

