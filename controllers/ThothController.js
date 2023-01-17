const User = require('../models/User')

module.exports = class ThothController{

    static async showThoth(req, res) {

        const id = req.session.userid
        if(id){
            const user = await User.findOne({where: {id: id}, raw: true})
            res.render('thoths/home', { user })
        }
        else{
            res.render('thoths/home')
        }
    } 

    static async dashboard(req, res) {
        const id = req.session.userid

        const user = await User.findOne({where: {id: id}, raw: true})       

        res.render('thoths/dashboard', { user })
    }     

    static async delUser(req,res) {
        const id = req.body.id       
        
        try {
            await User.destroy({where: {id: id }})

            req.flash('message','Usuário removido com sucesso!')

            req.session.save(() =>{
                res.redirect('/thoths/users')
            })
        } catch (error) {
            console.log(`Ocorreu um erro: ${error}`)
        }
    }

    static async editUser(req,res) {
        const id = req.params.id        

        const user = await User.findOne({where: {id: id}, raw: true})

        if(user.adm === 0){
            user.adm = false
        }else{
            user.adm = true
        }

        let presencial, remoto, misto = ''


        if(user.tipo === 'presencial'){
            presencial = 'selected'
        }else if(user.tipo === 'remoto'){
            remoto = 'selected'
        }else{
            misto = 'selected'
        }

        res.render('auth/edit', { user, presencial, remoto, misto})
        
    }

    static async editUserSave(req,res) {
        const id = req.body.id  

        const user = {
            name: req.body.name,
            email: req.body.email,
            tipo: req.body.tipo,
            lotacao: req.body.lotacao,
            adm: req.body.adm === '0' ? true : false,
        }

        try {
            await User.update(user, {where: { id: id }})

            req.flash('message','Usuário atualizado com sucesso!')

            req.session.save(() =>{
                res.redirect('/thoths/editusr')
            })
        } catch (error) {
            console.log(`Ocorreu um erro: ${error}`)
        }

      
        
    }    

    static async updatePw(req,res) {
        const { id, password, confirmpassword } = req.body

        if(password != confirmpassword) {
            req.flash('message','As senhas não conferem, tente novamente!')
            res.redirect('thoths/editusr')
            return
        }
       

        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)

        const user = {

            password: hashedPassword
        }

        try {
            await User.update(user, {where: { id: id }})  

            req.session.userid = id
            
            req.flash('message','Senha atualizada com sucesso!')

            req.session.save(()=>{
                res.redirect('thoths/editusr')
            })
            
        } catch (error) {
            req.flash('message',`Erro ao cadastrar: ${error}`)
        }        
    }

    static async users(req, res) {
        const usersData = await User.findAll({            
            order: [['name', 'ASC']]
        })

        const users = usersData.map((result) => result.get({plain:true}))   

        res.render('thoths/users', { users })
    } 

}