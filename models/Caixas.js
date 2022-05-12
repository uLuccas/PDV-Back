const mongoose = require("mongoose");

const Caixas = mongoose.model("caixas", {
  valorInicial: Number,
  valorFinal: Number,
  notaDuzentos: Number,
  notaCem: Number,
  notaCinquenta: Number,
  notaVinte: Number,
  notaDez: Number,
  notaCinco: Number,
  notaDois: Number,
  notaUm: Number,
  data: String,
  // data: {
  //   type: Date,
  //   default: Date.now,
  // },
});

module.exports = Caixas;
