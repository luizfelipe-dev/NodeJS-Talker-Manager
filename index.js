const express = require('express');
const bodyParser = require('body-parser');
const getAllTalkers = require('./middleware/req1');
const getTalkerById = require('./middleware/req2');
const login = require('./middleware/req3');

const validateEmail = require('./validations/validateEmail');
const validatePassword = require('./validations/validatePassword');



const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// requisito 1
app.get('/talker', getAllTalkers);

// requisito 2
app.get('/talker/:id', getTalkerById);

// requisito 3
app.post('/login', validateEmail, validatePassword, login)
// Erros

// app.use((err, _req, res, _next) => {
//   res.status(500).json({ error: `Erro: ${err.message}` });
// });

app.listen(PORT, () => {
  console.log('Online');
});