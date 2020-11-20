const router = require('express-promise-router')();

const pedidos = require('../controllers/pedidos.controller');

// Create
router.post('/pedidos/:id', pedidos.criarpedido);

// Pedidos de cleinte especifico
router.get('/pedidos/:id', pedidos.listapedidosdecliente)

// Pedidos de um produto
router.get('/pedidosproduto/:id', pedidos.listapedidosdeproduto)


module.exports = router;