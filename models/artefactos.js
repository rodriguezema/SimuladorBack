module.exports = (sequelize,type) => {
    return sequelize.define('artefacto', {
        id_artefacto: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
        nombre: type.STRING,
        categoria: type.STRING,
        energia: type.STRING,
        consumo: type.INTEGER,
        calor: type.INTEGER,
        promedio: type.INTEGER,
        id_ambiente: type.INTEGER,  
    })
}