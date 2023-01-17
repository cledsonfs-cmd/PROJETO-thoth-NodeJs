const Redmine = require('node-redmine');

const Empresa = require('../models/Empresa')
const Projeto = require('../models/Projeto')
const Tarefa = require('../models/Tarefa')
const TempoGasto = require('../models/TempoGasto')
const User = require('../models/User')


const hostname = process.env.REDMINE_HOST || 'http://192.168.1.137/';
const config = {
    apiKey: process.env.REDMINE_APIKEY || '57cd79c476723d7abf24acdb9f2ab0294bdf2a3b'
};

const redmine = new Redmine(hostname, config);

module.exports = class RedimineController{
    
    static async getProjetos(){
        var dump_projects = async function(project){
            console.log('Dumping project:');
            let nome, descricao, idredmine = ''
            for(var item in project){
                console.log(' -> ' + item + ': ' + JSON.stringify(project[item]));
                if(item == 'name'){
                    nome = JSON.stringify(project[item])
                }

                if(item == 'description'){
                    descricao = JSON.stringify(project[item])
                }

                if(item == 'id'){

                    idredmine = JSON.stringify(project[item])
                }
            }

            let pro = {
                nome,descricao,idredmine       
            }

            await Projeto.destroy({where: {}})

            try {               
                await Projeto.create(pro)                                
            } catch (error) {
                console.log(`Erro ao cadastrar: ${error}`)
            }  
        }

        redmine.projects({limit: 100}, function(err, data) {
            if (err) throw err;
            
                for (var i in data.projects) {
                    dump_projects(data.projects[i]);
            }
            console.log('total_count: ' + data.total_count);
        });
    }
    

    static async getIssues(){        
        var dump_issue = function(issue){
            console.log('Dumping issue:');
            for (var item in issue){
                console.log(' -> ' + item + ': ' + JSON.stringify(issue[item]));
            }
            };
            
            redmine.issues({limit: 2}, function(err, data) {
            if (err) throw err;
            
                for (var i in data.issues) {
                dump_issue(data.issues[i]);
            }
            
            console.log('total_count: ' + data.total_count);
            });
    }
}