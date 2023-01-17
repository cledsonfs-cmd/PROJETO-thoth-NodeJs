const Empresa = require('../models/Empresa')

module.exports = class EmpresaController{
    
    static async all(req, res) {

        const objetos = await Empresa.findAll()
        res.render('thoths/empresa/all', { objetos })
       
    } 
}