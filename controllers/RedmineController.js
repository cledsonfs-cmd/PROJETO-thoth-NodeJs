const Redmine = require('node-redmine');

const Empresa = require('../models/Empresa')
const Projeto = require('../models/Projeto')
const Tarefa = require('../models/Tarefa')
const TempoGasto = require('../models/TempoGasto')
const User = require('../models/User')


const hostname = process.env.REDMINE_HOST || 'http://redmine.zanran.me';
const config = {
    apiKey: process.env.REDMINE_APIKEY || 'bed1ba0544b681e530c2447341607f423c9c8781'
};

var redmine = new Redmine(hostname, config);

module.exports = class RedmineController {

}