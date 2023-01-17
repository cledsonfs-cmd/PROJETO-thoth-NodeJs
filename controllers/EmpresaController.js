const Empresa = require('../models/Empresa')

module.exports = class EmpresaController{
    
    static async all(req, res) {

        const objetos = await Empresa.findAll()
        res.render('thoths/empresa/all', { objetos })
       
    } 

    static async update(req, res) {
        const id = req.params.id

        const objeto = await Empresa.findOne({where: {id: id}, raw: true})

        res.render('thoths/empresa/edit', {objeto})
    }
}