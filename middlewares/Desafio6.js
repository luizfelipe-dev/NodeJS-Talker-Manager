/* Exemplo para testar: 

Método POST -> localhost:3000/talker/1

JSON no body da requisição:
    {
        "name":"Henrique Martins Alvarenga",
        "age":43,
        "talk": {
            "watchedAt":"25/02/2020",
            "rate":3
        }
    }
*/

const fs = require('fs').promises;

const deleteTalker = async (req, res) => {
    const { id } = req.params;
    const talkers = await fs.readFile('./talker.json', 'utf-8');
    const talkersInJSON = JSON.parse(talkers);
    
    const foundedTalker = talkersInJSON.find((t) => t.id === +id);
    const index = talkersInJSON.indexOf(foundedTalker);
    talkersInJSON.splice(index, 1);
    console.log(talkersInJSON);
    
    try {
        await fs.writeFile('./talker.json', JSON.stringify(talkersInJSON), 'utf-8');
        res.status(200).json({
            message: 'Pessoa palestrante deletada com sucesso',
            restante: talkersInJSON,
        });
    } catch (e) {
        console.error(e.message);
    }
};

module.exports = deleteTalker;