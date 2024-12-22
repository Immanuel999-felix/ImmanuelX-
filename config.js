require('dotenv').config();

module.exports = {
    SESSION_ID: process.env.SESSION_ID,
    ownerNumber: [process.env.OWNER_NUMBER],
    botName: process.env.BOT_NAME || 'Immanuel999-bot-MD',
    prefix: process.env.PREFIX || '.'
};

