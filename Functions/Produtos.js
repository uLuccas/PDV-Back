const Produtos = require("../models/Produtos");

exports.getProdutos = async (_, res) => {
  try {
    const result = await Produtos.find();
    return res.json(result);
  } catch (error) {
    console.log(error);
  }
};

exports.novoProduto = async (req, res) => {
  const { nome, preco, estoque } = req.body;

  const result = new Produtos({
    nome,
    preco,
    estoque,
    qtd: 0,
  });
  console.log(result);
  const insere = await result.save();
  return res.status(200).json(insere);
};

exports.deletarProduto = async (req, res) => {
  const { _id } = req.body;
  const result = await Produtos.deleteOne({ _id });

  return res.status(200).json(result);
};

exports.alterarQuantidade = async (req, res) => {
  const { _id, qtd } = req.body;
  const result = await Produtos.updateOne({ _id: _id }, { $set: { qtd: qtd } });

  return res.status(200).json(result);
};
