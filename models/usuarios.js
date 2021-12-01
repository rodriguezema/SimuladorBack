module.exports = (sequelize, type) => {
    const User = sequelize.define('usuario',{
        id_usuario: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: type.STRING,
            allowNull: true
        },
        apellido: {
            type: type.STRING,
            allowNull: true
        },
        email: {
            type: type.STRING,
            allowNull: true,
            unique: true
        },
        rol: type.STRING
    })

    // User.hasMany(Inmueble, {
    //     foreignKey: 'ID_USUARIO'
    // })

    return User
}