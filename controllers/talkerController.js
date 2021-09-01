const express = require('express');

const router = express.Router();

const {
  getTalkers,
  validateToken,
  createTalker,
  talkerFormValidations,
  updateTalker,
  deleteTalker,
} = require('../middlewares');

router.get('/', getTalkers, async (req, res) => {
    if (req.talkers.length === 0) return res.status(200).send([]);
    
    return res.status(200).send(req.talkers);
});

router.get('/:id', getTalkers, async (req, res) => {
  const { id } = req.params;
  const { talkers } = req;
  const SelectedTalker = talkers.find((talker) => talker.id === parseInt(id, 10));

  if (SelectedTalker) return res.status(200).send(SelectedTalker);

  return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

router.post('/', [
  validateToken,
  ...talkerFormValidations,
  getTalkers,
  createTalker,
]);

router.put('/:id', [
  validateToken,
  ...talkerFormValidations,
  getTalkers,
  updateTalker,
]);

router.delete('/:id', [
  validateToken,
  getTalkers,
  deleteTalker,
]);

module.exports = router;