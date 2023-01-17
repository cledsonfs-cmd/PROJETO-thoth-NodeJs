const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Empresa = db.define('Empresa',{
    nome: {
        type: DataTypes.STRING,
        required: true
    },
    email: {
        type: DataTypes.STRING,
        required: true
    },
    cnpj: {
        type: DataTypes.STRING,
        required: true
    }
})

module.exports = Empresa