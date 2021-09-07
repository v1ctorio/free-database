const { Schema, model } = require("mongoose");

const esquema = new Schema({
    titulo: String,
    contenido: String
})

module.exports = model("nosexd",esquema)