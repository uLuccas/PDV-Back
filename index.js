const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/refrescos')

const caixas = require('./Routers/Caixas')
const pedidos =  require('./Routers/Pedidos')
const produtos =  require('./Routers/Produtos')
const carrinhos =  require('./Routers/Carrinhos')
 // comentario top
app.use('/api/caixas', caixas)
app.use('/api/pedidos', pedidos)
app.use('/api/produtos', produtos)
app.use('/api/carrinhos', carrinhos)

app.listen(4321, () =>{
    console.log("Server On!");
})