const Carrinhos = require("../models/Carrinhos");

exports.getCarrinhos = async (_, res) => {
  const result = await Carrinhos.find().sort({ _id: -1 }).limit(1);

  return res.status(200).json(result);
};

exports.novoCarrinho = async (req, res) => {
  const { itens } = req.body;
  const result = new Carrinhos({
    itens,
    fechado: false,
  });
  await result.save();
  return res.status(200).json(result);
};

exports.incluirItem = async (req, res) => {
  const { _id, produtos } = req.body;
  const result = await Carrinhos.findOne({ _id: _id });
  console.log(result);

  result.itens.push(produtos);
  await result.save();

  return res.status(200).json(result);
};

exports.deletarItem = async (req, res) => {
  const { idCarrinho, idItem } = req.body;
  console.log(idItem);
  const result = await Carrinhos.findOne({ _id: idCarrinho });
  const resultadoFinal = result.itens.forEach((item, index) => {
    console.log(item._id);
    if (item._id.toString() === idItem) {
      result.itens.splice(index, 1);
      return res
    }
  });
  await result.save();
  console.log(resultadoFinal);
  // console.log(43,result);

  return res.json(resultadoFinal);
};

exports.alterarQtd = async (req, res) => {
  const { idCarrinho, idItem, quantidade } = req.body;
  const result = await Carrinhos.findOne({ _id: idCarrinho });
  const resultadoFinal = result.itens.forEach((item) => {
    if (item._id.toString() === idItem) {
      item.qtd = quantidade;
    }
  });
  await result.save();

  console.log(resultadoFinal);
  return res.json(resultadoFinal);
};
