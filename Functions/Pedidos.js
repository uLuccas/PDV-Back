const Pedidos = require("../models/Pedidos");

exports.getPedidos = async (_, res) => {
  try {
    const result = await Pedidos.find().sort({_id: -1});
    return res.json(result);
  } catch (error) {
    console.log(error);
  }
};

exports.novoPedido = async (req, res) => {
  const {
    itens,
    total,
    recebido,
    notaDuzentos,
    notaCem,
    notaCinquenta,
    notaVinte,
    notaDez,
    notaCinco,
    notaDois,
    notaUm,
  } = req.body;

  const result = new Pedidos({
    itens: itens,
    total,
    recebido,
    notaDuzentos,
    notaCem,
    notaCinquenta,
    notaVinte,
    notaDez,
    notaCinco,
    notaDois,
    notaUm,
  });
  const inclui = await result.save();
  return res.json(inclui);
};

exports.deletarPedido = async (req, res) => {
  const { _id } = req.body;

  const result = await Pedidos.deleteOne({ _id: _id }).catch((error) => {
    console.log(error);
    return res.status(500).json({ erro: error.toString() });
  });
  console.log(result);
  return res.status(200).json(result);
};
