const Tarefa = require('../models/Tarefa')

module.exports = class TarefaController{

    static async all(req, res) {

        const objetos = await Tarefa.findAll()
        res.render('thoths/tarefa/all', { objetos })
       
    }

    static async update(req, res) {
        const id = req.params.id

        const objeto = await Tarefa.findOne({where: {id: id}, raw: true})

        res.render('thoths/tarefa/edit', {objeto})
    }    
}