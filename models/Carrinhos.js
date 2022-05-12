const mongoose = require("mongoose");

const Carrinhos = mongoose.model("carrinhos", {
    itens:[{
        nome: String,
        qtd: Number,
        preco: Number,
    }],
    fechado: Boolean
})

module.exports = Carrinhos