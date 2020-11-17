const router = require('express-promise-router')();
const produtoController = require('../controllers/produto.controller');

// Create
router.post('/produtos', produtoController.criarProduto);

// Read
router.get('/produtos', produtoController.listarTodosProdutos);

// Buscar produto pelo ID
router.get('/produtos/:id', produtoController.buscaProdutoPorId);

// Update
router.put('/produtos/:id', produtoController.atualizarProdutoPorrId);

// Delete
router.delete('/produtos/:id', produtoController.deletarProdutoId);

module.exports = router;