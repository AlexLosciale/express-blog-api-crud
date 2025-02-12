const express = require('express');
const app = express();
const port = 3000;

const blogRouter = require('./ROUTERS/blog'); 
// Rimuoviamo l'importazione di bachecaRouter perché non è un router, ma un array di dati

app.use(express.static('public'));
app.use(express.json()); 

app.use("/blog", blogRouter);  // Usa solo il router per i blog

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

