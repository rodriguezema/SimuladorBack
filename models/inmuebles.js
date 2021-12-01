module.exports = (sequelize,type) => {
    const Inmueble = sequelize.define('inmueble', {
        id_inmueble: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
        nombre: type.STRING,
        cant_personas: type.INTEGER,
        antiguedad: type.INTEGER,
        cp: type.INTEGER,
        servicio: type.STRING,
        id_user: type.INTEGER
    })
    return Inmueble
}