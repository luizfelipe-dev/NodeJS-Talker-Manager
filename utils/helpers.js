const fs = require('fs').promises;

function generateToken(n) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let token = '';

  for (let index = 0; index < n; index += 1) {
      token += chars[Math.floor(Math.random() * chars.length)];
  }
  return token;
}

const readTalker = async () => {
  const talker = await fs.readFile('./talker.json', 'utf-8');
  const result = await JSON.parse(talker);
  return result;
};

module.exports = { 
  generateToken,
  readTalker,
};
