const blog = require('../data/blogs'); 

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

function destroy(req, res) {
    const index = blog.findIndex(p => p.id == req.params.id);
    if (index !== -1) {
        blog.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Blog non trovato');
    }
}

module.exports = { index, show, destroy };
