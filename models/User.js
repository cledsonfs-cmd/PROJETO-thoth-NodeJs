const { DataTypes, BOOLEAN } = require('sequelize')

const db = require('../db/conn')

const Empresa = require('./Empresa')

const User = db.define('User',{
    name: {
        type: DataTypes.STRING,
        required: true
    },
    email: {
        type: DataTypes.STRING,
        required: true
    },
    password: {
        type: DataTypes.STRING,
        required: true
    },
    tipo: {
        type: DataTypes.STRING,
        required: true
    },
    lotacao: {
        type: DataTypes.STRING,
        required: true
    },
    adm: {
        type: DataTypes.BOOLEAN,
        required: true
    },
    idredmine: {
        type: DataTypes.STRING,
        required: true
    }
})

User.belongsTo(Empresa) //1 -> 1
Empresa.hasMany(User) //1 -> n

module.exports = User