require("dotenv").config();
const express = require("express");
const server = express();

// Configurar o servidor para apresentar arquivos extras
server.use(express.static("public"));

// Habilitar body do formulário
server.use(express.urlencoded({ extended: true }));

//Configurar a conexão com o banco de dados
const Pool = require("pg").Pool;
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  idleTimeoutMillis: 0,
  connectionTimeoutMillis: 0,
};
const db = new Pool(dbConfig);
// Configurando a template engine
const nunjuncks = require("nunjucks");
nunjuncks.configure("./", {
  express: server,
  noCache: true,
});

// Configurar a apresentação da página
server.get("/", function (req, res) {
  db.query(`SELECT * FROM "donors" ORDER BY id DESC;`, function (err, result) {
    console.log(err);
    if (err) {
      return res.send("Erro de banco de dados.");
    }
    const donors = result.rows;
    return res.render("index.html", { donors });
  });
});

// Pegar dados do formulário
server.post("/", function (req, res) {
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
  db.query(query, values, function (err) {
    if (err) {
      const msgErr = "Erro no banco de dados.";
      return res.render("index.html", { msgErr });
    }
  });
  return res.redirect("/");
});

// Ligar servidor e permitir acesso a porta 3000
server.listen(3000, function () {
  console.log("Servidor iniciado.");
  console.log("Acesse http://localhost:3000");
});
