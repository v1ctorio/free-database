const express = require("express");
var app = express();
var esquema = require("../database/model");

var todo = esquema.find();
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
require("../database/connection");
app.use(express.json())
app.use("/list", async (req, res) => res.send(await todo));

app.post("/add", async (req, res) => {console.log(req.body)
let titulo = req.body.titulo
let contenido = req.body.contenido
if (!titulo || !contenido) return res.status(418).send("Necesitas adjuntar titulo y contenido")

if (titulo.length > 25) return res.status(418).send("LOS TITULOS deben de ser menores a 25 CARACTERES")
if (contenido.length > 5000) return res.status(418).send("El contenido debe de ser menor a 5000 caracteres")
let xd = new esquema({
 titulo,
 contenido
})
xd.save().then(nosesi => res.send(nosesi))

});
module.exports = app;
