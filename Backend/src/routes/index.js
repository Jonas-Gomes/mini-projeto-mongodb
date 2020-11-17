const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Oi, sinta-se em casa',
    version: '1.0',
  });
});

module.exports = router;