module.exports = (sequelize,type) => {
    const Ambiente = sequelize.define('ambiente', {
        id_ambiente: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
        descripcion: type.STRING,
        volumen: type.INTEGER,
        clasificacion: type.STRING,
        id_inmueble: type.INTEGER
    })
    return Ambiente
}