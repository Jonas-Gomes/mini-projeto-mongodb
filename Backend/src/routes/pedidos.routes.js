const router = require('express-promise-router')();

const pedidos = require('../controllers/pedidos.controller');

// Create
router.post('/pedidos/:id', pedidos.criarpedido);

// Read
router.get('/pedidos/:id', pedidos.listapedidosdecliente)

//Delete
router.get('/pedidosproduto/:id', pedidos.listapedidosdeproduto)


module.exports = router;