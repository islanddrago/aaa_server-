const express = require("express");
const app = express();

app.listen(5000, () => console.log('started'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send(`${req.headers.accept}`);
});

app.get('/test', (req, res) => {
    res.json(
    {
        hello: 'world',
        arr: ['hello', 'world']
    });
});

