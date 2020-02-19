const express = require("express");
const server = express();

// Configurar o servidor para apresentar arquivos extras
server.use(express.static("public"));

// Habilitar body do formulário
server.use(express.urlencoded({ extended: true }));

//Configurar a conexão com o banco de dados
const Pool = require("pg").Pool;
const db = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "doe"
});

// Configurando a template engine
const nunjuncks = require("nunjucks");
nunjuncks.configure("./", {
  express: server,
  noCache: true
});

// Configurar a apresentação da página
server.get("/", function(req, res) {
  db.query(`SELECT * FROM "donors" ORDER BY id DESC LIMIT 4;`, function(err, result) {
    if (err) return res.send("Erro de banco de dados.");
    const donors = result.rows;
    return res.render("index.html", { donors });
  });
});

// Pegar dados do formulário
server.post("/", function(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const blood = req.body.blood;

  if (name == "" || email == "" || blood == "") {
    const msgEmpty = "Todos os campos são obrigatórios.";
    return res.render("index.html", { msgEmpty });
  }

  const query = `
        INSERT INTO "donors" ("name","email","blood") 
        VALUES ($1, $2, $3);
    `;
  const values = [name, email, blood];
  db.query(query, values, function(err) {
    if (err) {
      const msgErr = "Erro no banco de dados.";
      return res.render("index.html", { msgErr });
    }
  });
  return res.redirect("/");
});

// Ligar servidor e permitir acesso a porta 3000
server.listen(3000, function() {
  console.log("---");
});
