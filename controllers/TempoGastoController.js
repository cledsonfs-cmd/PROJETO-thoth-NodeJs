const TempoGasto = require('../models/TempoGasto')

module.exports = class TempoGastoController{

    static async all(req, res) {

        const objetos = await TempoGasto.findAll()
        res.render('thoths/tempogasto/all', { objetos })
       
    }    

}