const express = require('express');


const app = express();

const { animals } = require('./data/animals.json')














app.get('/api/animals.json', (req, res) => {
    res.json('animals.json');
});

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});