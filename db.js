const Sequelize = require('sequelize')

const Inmuebles = require('./models/inmuebles')
const Usuarios = require('./models/usuarios')
const Artefactos = require('./models/artefactos')
const Ambientes = require('./models/ambientes')


const sequelize = new Sequelize('sql10469483','sql10469483','Bgbv3epkYH',{
    host: 'sql10.freesqldatabase.com',
    dialect: 'mysql',
    port:3306,
})

const Usuario = Usuarios(sequelize,Sequelize);
const Inmueble = Inmuebles(sequelize,Sequelize);
const Artefacto = Artefactos(sequelize,Sequelize);
const Ambiente = Ambientes(sequelize,Sequelize);

sequelize.sync({force: false})
    .then(()=> {
        console.log('Tablas Sincronizadas');
    })

module.exports = {
    Inmueble, Usuario, Artefacto, Ambiente
}


// Host: sql10.freesqldatabase.com
// Database name: sql10469483
// Database user: sql10469483
// Database password: Bgbv3epkYH
// Port number: 3306

