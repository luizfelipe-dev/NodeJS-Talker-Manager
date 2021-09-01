const getTalkers = require('../../fs-utils/getTalkers');

const HTTP_OK_STATUS = 200;

const talker = async (req, res) => {
  const talkers = await getTalkers();
  return res.status(HTTP_OK_STATUS).json(talkers);
};

module.exports = talker;
