const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Empresa = require('./Empresa')
const User = require('./User')
const Projeto = require('./Projeto')

const Tarefa = db.define('Tarefa',{
    codigo: {
        type: DataTypes.STRING,
        required: true
    },
    nome: {
        type: DataTypes.STRING,
        required: true
    },
    descricao: {
        type: DataTypes.STRING,
        required: true
    },
    situacao: {
        type: DataTypes.STRING,
        required: true
    },
    autor: {
        type: DataTypes.STRING,
        required: true
    },
    tipo: {
        type: DataTypes.STRING,
        required: true
    },
    previsao: {
        type: DataTypes.DATE,
        required: false
    },
    alteracao: {
        type: DataTypes.DATE,
        required: false
    },
    lotacao: {
        type: DataTypes.DATE,
        required: false
    },
    tempoestimado: {
        type: DataTypes.TIME,
        required: false
    },
    idredmine: {
        type: DataTypes.STRING,
        required: true
    }
})

Tarefa.belongsTo(Empresa) //1 -> 1
Empresa.hasMany(Tarefa) //1 -> n

Tarefa.belongsTo(User) //1 -> 1
User.hasMany(Tarefa) //1 -> n

Tarefa.belongsTo(Projeto) //1 -> 1
Projeto.hasMany(Tarefa) //1 -> n

module.exports = Tarefa