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