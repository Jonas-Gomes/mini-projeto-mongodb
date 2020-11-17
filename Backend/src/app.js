const express = require('express');

const cors = require('cors');

const app = express();

const index = require('./routes/index');
const produto = require('./routes/produto.routes');
const usuario = require('./routes/usuario.routes');
const carrinho = require('./routes/carrinho.routes');
const pedidos = require('./routes/pedidos.routes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/', produto);
app.use('/', usuario);
app.use('/', carrinho);
app.use('/', pedidos);
module.exports = app;