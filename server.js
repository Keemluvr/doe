const express = require("express")
const server = express()

// Configurar o servidor para apresentar arquivos extras
server.use(express.static('public'))

// Configurando a template engine
const nunjuncks = require("nunjucks")
nunjuncks.configure("./", {
    express: server
})

// Configurar a apresentação da página
server.get("/", function(req, res){
    return res.render("index.html")
})

// Ligar servidor e permitir acesso a porta 3000
server.listen(3000, function() {
    console.log('---')
})

