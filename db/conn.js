const { Sequelize } = require('sequelize')

const sequilize = new Sequelize('thoth', 'root', 'vulcano', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequilize.authenticate();
    console.log('Conectado com Sucesso!')
} catch (error) {
    console.log(`Erro ao conetar: ${error}`)
}

module.exports = sequilize