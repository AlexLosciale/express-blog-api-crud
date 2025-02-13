const blog = require('../data/blogs'); 

function index(req, res) {
    let filterblog = blog;
    if (req.query.tag) {
        filterblog = filterblog.filter(p => p.tags.includes(req.query.tag));
    }
    res.json(filterblog);
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
    console.log(req.body);
    res.send('Dati ricevuti');
}

function update(req, res) {
    const post = blog.find(p => p.id == req.params.id);

};

function destroy(req, res) {
    const index = blog.findIndex(p => p.id == req.params.id);
    if (index !== -1) {
        blog.splice(index, 1);
        res.sendstatus(204);
    } else {
        res.status(404).send('Blog non trovato');
    }
}

module.exports = { index, show, destroy, update, store };
