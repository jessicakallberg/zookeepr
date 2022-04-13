const express = require('express');


const app = express();

const { animals } = require('./data/animals.json')












function filterByQuery(query,animalsArray)  {
    let filterdResults = animalsArray;
    if (query.diet) {
        filterdResults = filterdResults.filter(animal => animal.diet === query.diet);
    }

    if(query.species) {
        filterdResults = filterdResults.filter(animal.species === query.species);
    }

    if (query.name) {
        filterdResults = filterdResults.filter(animal => animal.name === query.name);
    }

    return filterdResults;
}

app.get('/api/animals.json', (req, res) => {
    let results = animals;
    if (req.query){
        results = filterByQuery(req.query, results);
    }

    res.json(results);
});

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});