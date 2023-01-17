const Projeto = require('../models/Projeto')


const RedmineController = require('./RedmineController')

module.exports = class ProjetoController{
    
    static async all(req, res) {

        const objetos = await Projeto.findAll({raw: true, order: [['nome', 'asc']]})

        RedmineController.getProjetos()

        res.render('thoths/projeto/all', { objetos })
       
    }
}