const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const User = require('./User')

const Tought = db.define('Tought', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
})
 // Chave estrangeira - Um user pode ter vários endereços mas um endereço pertence a um usuário
Tought.belongsTo(User)
User.hasMany(Tought)

module.exports = Tought