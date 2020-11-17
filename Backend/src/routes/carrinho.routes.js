const router = require('express-promise-router')();
const carrinho = require('../controllers/carrinho.controller');

// Create
router.post('/carrinho/:id', carrinho.criarcarrinho);

// Read
router.get('/carrinho/:id', carrinho.listarCarrinho);

// Delete
router.delete('/carrinho/:id', carrinho.excluirCarrinho);


module.exports = router;