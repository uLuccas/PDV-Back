const express = require("express");
const router = express.Router();
const {
  getPedidos,
  novoPedido,
  deletarPedido,
} = require("../Functions/Pedidos");

router.get("/", getPedidos);
router.post("/novoPedido", novoPedido);
router.delete("/deletarPedido", deletarPedido);

module.exports = router;
