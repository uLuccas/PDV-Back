const express = require("express");
const router = express.Router();
const {
  getProdutos,
  novoProduto,
  deletarProduto,
  alterarQuantidade
} = require("../Functions/Produtos");
const { route } = require("./Caixas");

router.get("/", getProdutos);
router.post("/novoProduto", novoProduto);
router.delete("/deletarProduto", deletarProduto);
router.put('/alterarQuantidade',alterarQuantidade)

module.exports = router;
