const blog = require('../data/bacheca');

function index(req, res) {
res.json(blog);
}
function show(req, res) {
    const post = blog.find(p => p.id == req.params.id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).send('Blog non trovato');
    }
}
function store(req, res) {
    res.send(`Modifica del blog ${req.params.id}`);
}
function destroy(req, res) {
    const index = blog.findIndex(p => p.id == req.params.id);
    if (index !== -1) {
        blog.splice(index, 1);
        res.send('Blog eliminato');
    } else {
        res.status(404).send('Blog non trovato');
    }
};

// esportiamo tutto
module.exports = { index, show, store, destroy }