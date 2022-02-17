module.exports = (sequelize,type) => {
    const Simulacion = sequelize.define('simulacion', {
        id_simulacion: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
        energia: type.STRING,
        consumo_total: type.INTEGER,
        id_user: type.INTEGER
    })
    return Simulacion
}