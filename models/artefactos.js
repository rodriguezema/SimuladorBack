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
        consumo: type.STRING,
        calor: type.STRING,
        promedio: type.STRING,
        id_inmueble: {
            type: type.INTEGER,
            allowNull: false
        }
    })
}