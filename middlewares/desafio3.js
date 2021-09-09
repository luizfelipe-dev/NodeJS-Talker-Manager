/* Exemplo para testar: 

POST - localhost:3000/login

JSON no body da Requisicao:
  {
    "email": pessoa22@uol.com,
    "password": 2345
  }
*/

const crypto = require('crypto');

const { validateEmail } = require('../validations/validations');
const { validatePassword } = require('../validations/validations');

const generateToken = () => crypto.randomBytes(8).toString('hex');
// Token Aleatório por dica do Vinicius Rodrigues :)

const login = (req, res) => {
  const { email, password } = req.body;
  const token = generateToken();

  if (validateEmail(email, res)) return;
  if (validatePassword(password, res)) return;

  res.status(200).json({
    token,
  });
};

module.exports = login;