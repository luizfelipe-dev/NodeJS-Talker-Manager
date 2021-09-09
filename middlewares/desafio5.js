/* Exemplo para testar

Método PUT -> localhost:3000/talker/1

no body da requisição: 

  {
    "name": "Henrique Alvarenga",
    "age": 42,
    "talk": {
      "watchedAt": "24/10/2020",
      "rate": 4
    }
  }
*/  

const fs = require('fs').promises;

const updateTalker = async (req, res) => {
    const talkerFromBody = req.body;
    const { id } = req.params;
    talkerFromBody.id = +id;
    const allTalkers = await fs.readFile('./talker.json', 'utf-8');
    const parsed = JSON.parse(allTalkers);
    const founded = parsed.find((t) => t.id === +id);
    const index = parsed.indexOf(founded);
    parsed.splice(index, 1, talkerFromBody);
    
    try {
        await fs.writeFile('./talker.json', JSON.stringify(parsed), 'utf-8');
        res.status(200).json(parsed[index]);
    } catch (e) {
        console.error(e.message);
    }
};

module.exports = updateTalker;