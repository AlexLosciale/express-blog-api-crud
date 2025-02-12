const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Index: Restituisce tutti i blog
router.get('/', blogController.index);

// Show: Restituisce un singolo blog
router.get('/:id', blogController.show);

// Create: Creazione di un nuovo blog
router.post('/', blogController.store);

// Update: Modifica integrale di un blog
router.put('/:id', blogController.store);

// Delete: Eliminazione di un blog
router.delete('/:id', blogController.destroy);

module.exports = router;
