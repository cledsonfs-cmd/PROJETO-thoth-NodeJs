const Projeto = require('../models/Projeto')

module.exports = class ProjetoController{
    
    static async all(req, res) {

        const objetos = await Projeto.findAll()
        res.render('thoths/projeto/all', { objetos })
       
    }
}