const { StatusCodes } = require('http-status-codes');
const moment = require('moment');

const MIN_AGE = 18;
const MAX_RATE = 5;
const MIN_RATE = 1;

module.exports = async function validate(req, res, next) {
    try {
        const talker = req.body;
    
        if (!talker.name) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: 'O campo "name" é obrigatório',
            });
        }
        if (talker.name.length < 3) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: 'O "name" deve ter pelo menos 3 caracteres',
            });
        }

        const age = parseInt(talker.age, 10);
        if (!age) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: 'O campo "age" é obrigatório',
            });
        }
        if (age < MIN_AGE) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: 'A pessoa palestrante deve ser maior de idade',
            });
        }

        const { talk } = talker;
        if (!talk || !talk.watchedAt || talk.rate === null || talk.rate === undefined) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
            });
        }

        const { watchedAt, rate } = talk;
        const isDateValid = moment(watchedAt, 'DD/MM/YYYY', true).isValid();
        if (!isDateValid) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
            });
        }

        const parsedRate = parseInt(rate, 10);
        if (parsedRate > MAX_RATE || parsedRate < MIN_RATE) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: 'O campo "rate" deve ser um inteiro de 1 à 5',
            });
        }

        next();
    } catch (err) {
        next(err);
    }
};