const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStorm = require('session-file-store')(session)
const flash = require('express-flash')

const app = express()

const conn = require('./db/conn')

//Models
const User = require('./models/User')
const Empresa = require('./models/Empresa')
const Projeto = require('./models/Projeto')
const Tarefa = require('./models/Tarefa')
const TempoGasto = require('./models/TempoGasto')

//Import Rotas
const tempoGastoRouts = require('./routes/tempoGastoRoutes')
const tarefaRouts = require('./routes/tarefaRoutes')
const projetoRoutes = require('./routes/projetoRoute')
const empresaRouts = require('./routes/empresaRoutes')
const thothRouts = require('./routes/thothRoutes')
const authRoutes = require('./routes/authRoutes')

//Import Controller
const ThothController = require('./controllers/ThothController')
const RedmineController = require('./controllers/RedmineController')

//Template Engine
const hbs = exphbs.create()
app.engine('handlebars', hbs.engine)
app.set('view engine','handlebars')

//Receber resposta do body
app.use(express.urlencoded({
    extended: true
  }))

app.use(express.json())

app.use(
    session({
        name: "session",
        secret: "nosso_secret",
        resave: false,
        saveUninitialized: false,
        store: new FileStorm({
            logFn: function() {},
            path: require('path').join(require('os').tmpdir(), "sessions")
        }),
        cookie: {
            secure: false,
            maxAge: 360000,
            expires: new Date(Date.now + 360000),
            httpOnly: true
        }
    })
)

app.use(flash())

app.use(express.static('public'))

app.use((req,res, next)=>{
    if(req.session.userid){
        res.locals.session = req.session
    }

    next()
    
})

//Rotas
app.use('/thoths/tempogastos',tempoGastoRouts)
app.use('/thoths/tarefas',tarefaRouts)
app.use('/thoths/projetos',projetoRoutes)
app.use('/thoths/empresas',empresaRouts)
app.use('/thoths',thothRouts)
app.use('/',authRoutes)

app.use('/',ThothController.showThoth)

conn
.sync()
//.sync({ force: true })
.then(() => { app.listen(3000)}).catch((err) => console.log(err))