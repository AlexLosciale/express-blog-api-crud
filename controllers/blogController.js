const blog = require('../data/bacheca'); // Importa i dati dal file bacheca

// Index: Restituisce tutti i post
function index(req, res) {
    res.json(blog);  // Restituisce tutti i post in formato JSON
}

// Show: Restituisce un singolo post
function show(req, res) {
    const post = blog.find(p => p.id == req.params.id);  // Cerca il post con l'id specificato
    if (post) {
        res.json(post);  // Restituisce il post trovato
    } else {
        res.status(404).send('Blog non trovato');  // Se il post non esiste, restituisce errore 404
    }
}

// Destroy: Eliminazione di un post
function destroy(req, res) {
    const index = blog.findIndex(p => p.id == req.params.id);  // Trova l'indice del post
    if (index !== -1) {
        blog.splice(index, 1);  // Rimuove il post dalla lista
        console.log(blog);  // Stampa la lista aggiornata nel terminale
        res.status(204).send();  // Risponde con stato 204 e nessun contenuto
    } else {
        res.status(404).send('Blog non trovato');  // Se il post non esiste, restituisce errore 404
    }
}

module.exports = { index, show, destroy };
