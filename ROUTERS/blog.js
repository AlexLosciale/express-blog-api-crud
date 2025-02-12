const express = require('express');
const router = express.Router();
const arreyposts = require('../data/blogs');

// Index: Lista di tutti i blog
router.get('/', (req, res) => {
    res.json(arreyposts);
});

// Show: Dettagli di un singolo blog
router.get('/:id', (req, res) => {
    res.send(`Dettagli del blog ${req.params.id}`);
});

// Create: Creazione di un nuovo blog
router.post('/', (req, res) => {
    res.send('Creazione di un nuovo blog');
});

// Update: Modifica integrale di un blog
router.put('/:id', (req, res) => {
    res.send(`Modifica del blog ${req.params.id}`);
});

// Delete: Eliminazione di un blog
router.delete('/:id', (req, res) => {
    res.send(`Cancellazione del blog ${req.params.id}`);
});

module.exports = router;