const express = require("express");
const router = express.Router();
const {getCarrinhos, novoCarrinho,incluirItem,deletarItem,alterarQtd} = require("../Functions/Carrinhos")

router.get('/', getCarrinhos)
router.post('/novoCarrinho', novoCarrinho)
router.put('/incluirItem', incluirItem)
router.delete('/deletarItem', deletarItem)
router.put('/alterarQtd', alterarQtd)

module.exports = router;