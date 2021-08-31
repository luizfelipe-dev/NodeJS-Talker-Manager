const express = require('express');
const bodyParser = require('body-parser');

const getAllTalkers = require('./middlewares/getAllTalkers');
const getTalkersId = require('./middlewares/getTalkersId');
const { validateEmail, validatePassword, validateName, validateAge, validateTalk, validateRate, validateToken, validateWatchedAt } = require('./middlewares/validations');
const generateToken = require('./utils/generateToken');
const talkerCreation = require('./middlewares/talker');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', getAllTalkers);

app.get('/talker/:id', getTalkersId);

app.post('/login', validateEmail, validatePassword, generateToken);

const validate = [validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
];
app.post('/talker', validate, talkerCreation);

app.listen(PORT, () => {
  console.log('Online');
});
