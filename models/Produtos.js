const mongoose = require("mongoose");

const Produtos = mongoose.model("produtos", {
  nome: String,
  preco: Number,
  estoque: Number,
  qtd: Number,
});

module.exports = Produtos;
