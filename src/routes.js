const express = require('express');
const ArtigoController = require('./interface/controllers/ArtigoController');

const router = express.Router();

router.post('/artigos', ArtigoController.SaveArtigo);

module.exports = router;
