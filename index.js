const { default: makeWASocket } = require('@whiskeysockets/baileys');
const { handleCommand } = require('./commands');
const config = require('./config');

async function startBot() {
    const conn = makeWASocket({ logger: { level: 'silent' }, browser: ['Immanuelx-MD', 'Chrome', '1.0'] });

    conn.ev.on('messages.upsert', async (message) => {
        handleCommand(conn, message, config.prefix);
    });

    console.log('Bot started successfully!🙂');
}

startBot();
