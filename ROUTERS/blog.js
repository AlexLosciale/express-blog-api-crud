const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController'); // Importa il controller

// Index: Restituisce tutti i post
router.get('/', blogController.index);

// Show: Restituisce un singolo post
router.get('/:id', blogController.show);

// Delete: Eliminazione di un post
router.delete('/:id', blogController.destroy);

module.exports = router;
