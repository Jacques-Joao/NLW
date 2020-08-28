// Servidor
const express = require('express') // express é o modulo que cria o servidor
const server = express()

const { pageLanding, pageStudy, PageGiveClasses, saveClasses} = require('./pages')

// configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Inicio e configuração
server
// receber os dados do req.body
.use(express.urlencoded({ extended: true}))
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public")) //public representa o directorio padrão
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", PageGiveClasses)
.post("/save-classes", saveClasses)

// start do servidor
.listen(5500) // listen define a sua porta
