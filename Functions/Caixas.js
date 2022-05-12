const Caixas = require("../models/Caixas");

exports.getCaixas = async (_, res) => {
  try {
    const result = await Caixas.find().sort({_id: -1});
    console.log(result);
    return res.json(result);
  } catch (error) {
    console.log(error);
  }
  // console.log(e);
};
exports.getOneCaixa = async (_, res) => {
  try {
    const result = await Caixas.find().sort({_id: -1}).limit(1);
    console.log(result);
    return res.json(result);
  } catch (error) {
    console.log(error);
  }
  // console.log(e);
};

exports.novoCaixas = async (req, res) => {
  const {
    valorInicial,
    valorFinal,
    notaDuzentos,
    notaCem,
    notaCinquenta,
    notaVinte,
    notaDez,
    notaCinco,
    notaDois,
    notaUm,
  } = req.body;
  const data = new Date();
  const caixas = new Caixas({
    valorInicial,
    valorFinal,
    notaDuzentos,
    notaCem,
    notaCinquenta,
    notaVinte,
    notaDez,
    notaCinco,
    notaDois,
    notaUm,
    data,
  });
  const result = await caixas.save();
  res.json(result);
};

exports.updateNotas = async (req, res) => {
  const {
    _id,
    notaDuzentos,
    notaCem,
    notaCinquenta,
    notaVinte,
    notaDez,
    notaCinco,
    notaDois,
    notaUm,
  } = req.body;

  const caixas = await Caixas.updateOne(
    { _id: _id },
    {
      $set: {
        notaDuzentos: notaDuzentos,
        notaCem: notaCem,
        notaCinquenta: notaCinquenta,
        notaVinte: notaVinte,
        notaDez: notaDez,
        notaCinco: notaCinco,
        notaDois: notaDois,
        notaUm: notaUm,
      },
    }
  ).catch((e) => {
    console.log(e);
    return res.status(500).json({ erro: e.toString() });
  });

  return res.json(caixas);
};

exports.updateValorFinal = async (req, res) => {
  const { _id, valorFinal } = req.body;

  const result = await Caixas.updateOne(
    { _id: _id },
    { $set: { valorFinal: valorFinal } }
  ).catch((e) => {
    console.log(e);
    return res.status(500).json({ erro: e.toString() });
  });

  return res.status(200).json(result);
};
