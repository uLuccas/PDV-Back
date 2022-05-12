const express = require("express");
const router = express.Router();
const {getCaixas, novoCaixas, updateNotas,updateValorFinal,getOneCaixa} = require("../Functions/Caixas")

router.get('/', getCaixas)
router.post('/novoCaixa', novoCaixas)
router.put('/atualizarNotas',updateNotas)
router.put('/fechamento',updateValorFinal)
router.get('/getOneCaixa',getOneCaixa)

module.exports = router;