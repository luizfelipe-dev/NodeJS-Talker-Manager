const express = require('express');
const controller = require('../controllers');
const middlewares = require('../middlewares');

const middlewaresCreate = [middlewares.checkToken, middlewares.checkName, middlewares.checkTalk,
  middlewares.checkAge, middlewares.checkRate, middlewares.checkDate];

const route = express.Router();

route.get('/talker', middlewares.checkAll, controller.getAll);
route.get('/talker/:id', middlewares.getById, controller.getById);
route.post('/talker', middlewaresCreate, controller.createTalker);

module.exports = route;
