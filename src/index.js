// Use "type: commonjs" in package.json to use CommonJS modules

const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

const port = 3000;
app.set('view engine','ejs')
app.set('views','./views')

app.use(bodyParser.json());
/* estas linhas são para leitura de de body.json */
app.use(express.json());
app.use(express.urlencoded());
/* aqui é o acesso exerno do sistema para a api */

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

require("../db/dbconnet")(app)
require("../rotas/home")(app)

require("../rotas/getnoticias")(app)
require("../rotas/getidnoticias")(app)
require("../rotas/getiponoticias")(app)

require("../rotas/postnoticias")(app)
require("../rotas/putnoticias")(app)
require("../rotas/delnoticias")(app)


 // Define your routes

app.listen(port, () => {

  console.log(`Example app listening on port ${port}`);

});

