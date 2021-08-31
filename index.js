const express = require('express');
const bodyParser = require('body-parser');

const getAllTalkers = require('./desafio1');
const getTalkerById = require('./desafio2');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// Desafio 1
app.get('/talker', getAllTalkers);

// Desafio 2
app.get('/talker/:id', getTalkerById);

app.listen(PORT, () => {
  console.log('Online');
});
