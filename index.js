const { default: makeWASocket } = require('@whiskeysockets/baileys');
const { handleCommand } = require('./commands');
const config = require('./config');

// Simple logger to avoid the `logger.child` error
const logger = {
    debug: console.debug,
    info: console.info,
    warn: console.warn,
    error: console.error
};

async function startBot() {
    const conn = makeWASocket({
        logger,  // Use the custom logger here
        browser: ['Immanuelx-MD', 'Chrome', '1.0'],
    });

    conn.ev.on('messages.upsert', async (message) => {
        handleCommand(conn, message, config.prefix);
    });

    console.log('Bot started successfully!🙂');
}

startBot();
