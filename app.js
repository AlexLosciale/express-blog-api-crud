const express = require('express');
const app = express();
const port = 3000;

const blogRouter = require('./ROUTERS/blog'); 

app.use(express.static('public'));
app.use(express.json()); 

app.use("/blog", blogRouter);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

