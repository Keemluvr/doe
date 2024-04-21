<h1 align="center">
  <img src="./public/assets/img/logo.png" width="250px" /><br>
  Toda doação é importante!
</h2>
<p align="center">
  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%23F7DF1E">
  </a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F7DF1E">
</p>

<br>

## :syringe: Projeto

DOE é um projeto que visa ser um banco de dados para doadores de sangue.

## :rocket: Tecnologias usadas

Este maravilindo projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [Express](https://expressjs.com/pt-br/)
- [Postgres](https://node-postgres.com/)

## 🚧 Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Postgres](https://node-postgres.com/)


## 🔨 Como executar o projeto

1. Clone este repositório:
    ```
    git clone https://github.com/Keemluvr/doe.git
    ```
2. Entre na raiz do projeto e instale as dependências:
    ```
    npm install
    ```
3. Execute o projeto:
    ```
    npm run start
    ```
    
## 🐘 Criando a base de dados
1. Crie um database no Postgres para este projeto
    ```sh
    # Criação do banco
    CREATE DATABASE doe
     ```
2. Adicione a tabela **donors**
   ```sh
    # Criação da tabela 
    CREATE TABLE "public"."donors" (
        id uuid DEFAULT gen_random_uuid(),
        name text COLLATE "default",
        email text COLLATE "default" NOT NULL,
        blood text COLLATE "default",
        CONSTRAINT donors_pkey PRIMARY KEY (id)
    )
   ```


## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/Keemluvr/doe/blob/master/LICENSE) para mais detalhes.
