/* 

Exemplo para testar no navegador: 
localhost:3000/talker/search?q=albuq

*/

const fs = require('fs').promises;

const searchTalker = async (req, res) => {
    const { q } = req.query;

    const capitalized = q[0].toUpperCase();
    
    const talkers = await fs.readFile('./talker.json', 'utf-8');
    const talkersInJSON = JSON.parse(talkers);
    
    const result = talkersInJSON.filter((t) => t.name.includes(capitalized));
    
    res.status(200).send(result);
};

module.exports = searchTalker;