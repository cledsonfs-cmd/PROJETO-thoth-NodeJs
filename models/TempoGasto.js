const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Empresa = require('./Empresa')
const Projeto = require('./Projeto')
const Tarefa = require('./Tarefa')
const User = require('./User')



const TempoGasto = db.define('TempoGasto',{
    horas: {
        type: DataTypes.FLOAT,
        required: true
    },
    gasto: {
        type: DataTypes.DATE,
        required: true
    },
    observacao: {
        type: DataTypes.STRING,
        required: true
    },
    atividade: {
        type: DataTypes.STRING,
        required: true
    },
    origem: {
        type: DataTypes.STRING,
        required: true
    },
    idredmine: {
        type: DataTypes.STRING,
        required: true
    }
})

TempoGasto.belongsTo(Empresa) //1 -> 1
Empresa.hasMany(TempoGasto) //1 -> n

TempoGasto.belongsTo(Projeto) //1 -> 1
Projeto.hasMany(TempoGasto) //1 -> n

TempoGasto.belongsTo(Tarefa) //1 -> 1
Tarefa.hasMany(TempoGasto) //1 -> n

TempoGasto.belongsTo(User) //1 -> 1
User.hasMany(TempoGasto) //1 -> n

module.exports = TempoGasto