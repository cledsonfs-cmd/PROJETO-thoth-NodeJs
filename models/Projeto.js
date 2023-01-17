const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Projeto = db.define('Projeto',{
    nome: {
        type: DataTypes.STRING,
        required: true
    },
    descricao: {
        type: DataTypes.STRING,
        required: true
    },
    idredmine: {
        type: DataTypes.STRING,
        required: true
    }
})

module.exports = Projeto