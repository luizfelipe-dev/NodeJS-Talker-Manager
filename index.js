const express = require('express');
const bodyParser = require('body-parser');
const talkRoutes = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use(talkRoutes);

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// endpoint para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log(`Server Working on port ${PORT}`);
});
