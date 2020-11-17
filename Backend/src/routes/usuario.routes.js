const router = require('express-promise-router')();
const usuarioController = require('../controllers/usuario.controller');


// Create
router.post('/usuario', usuarioController.createUser);

// Read
router.get('/usuario', usuarioController.listarUser);

// Buscar usuario pelo ID
router.get('/usuario/:id', usuarioController.buscaUsuarioporId);

// Update
router.put('/usuario/:id', usuarioController.atualizarUserId);

// Delete
router.delete('/usuario/:id', usuarioController.deletarUserId);

module.exports = router;