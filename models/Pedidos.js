const mongoose = require("mongoose");

const Pedidos = mongoose.model("pedidos", {
  itens: [
    {
      nome: String,
      qtd: Number,
      preco: Number,
    },
  ],
  total: Number,
  recebido: Number,
  notaDuzentos: Number,
  notaCem: Number,
  notaCinquenta: Number,
  notaVinte: Number,
  notaDez: Number,
  notaCinco: Number,
  notaDois: Number,
  notaUm: Number,
});

module.exports = Pedidos;
