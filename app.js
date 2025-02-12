const express = require('express');
const app = express();
const port = 3000;

const blogRouter = require('./ROUTERS/blog');
const bachecaRouter = require('./data/blogs');

app.use(express.static('public'));
app.use("/blog", blogRouter);
app.use("/", bachecaRouter);

app.get('/', (req, res) => {
    res.send('Hello World');
});

// index
app.get('/blog', function (req, res) {
res.send('Lista dei blog');
});
// show
app.get('/blog/:id', function (req, res) {
res.send('Dettagli dei blog ' + req.params.id);
});
// store
app.post('/blog', function (req, res) {
res.send('Creazione nuovo blog');
});
// update
app.put('/blog/:id', function (req, res) {
res.send('Modifica integrale del blog ' + req.params.id);
});
// modify
app.patch('/blog/:id', function (req, res) {
res.send('Modifica parziale del blog ' + req.params.id);
});
// destroy
app.delete('/blog/:id', function (req, res) {
res.send('Eliminazione del blog ' + req.params.id);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});