const { Router } = require('express');

const { 
    validateAge,
    validateName,
    validateTalk,
    validateTalkDate,
    validateTalkRate,
    validateToken,
    validateIdFromURL,
    } = require('../validations/validations');
  
  const getAllTalkers = require('../middlewares/desafio1');
  const getTalkerById = require('../middlewares/desafio2');
  const login = require('../middlewares/desafio3');
  const createTalker = require('../middlewares/desafio4');
  const updateTalker = require('../middlewares/desafio5');
  const deleteTalker = require('../middlewares/Desafio6');
  const searchTalker = require('../middlewares/desafio7');
 
const talkRoutes = Router();

// Desafio 7
talkRoutes.get('/talker/search', validateToken, searchTalker);

// Desafio 2
talkRoutes.get('/talker/:id', getTalkerById);

// Desafio 3
talkRoutes.post('/login', login);

// Desafio 6
talkRoutes.delete('/talker/:id', validateToken, validateIdFromURL, deleteTalker);

// Desafio 5
talkRoutes.put('/talker/:id', 
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateTalkDate,
  validateTalkRate,
  validateIdFromURL,
  updateTalker);

// Desafio 4
talkRoutes.post('/talker', 
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateTalkDate,
  validateTalkRate,
  createTalker);  

// Desafio 1
talkRoutes.get('/talker', getAllTalkers);

module.exports = talkRoutes;