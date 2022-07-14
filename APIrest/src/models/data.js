// Para copiar `` b n @
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const datosSchema = new Schema ({
    name: String,
    prize: String
})

const Dato = mongoose.model("datos",datosSchema)

module.exports = Dato;