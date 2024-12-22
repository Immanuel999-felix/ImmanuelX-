const { default: makeWASocket } = require('@whiskeysockets/baileys');
const { handleCommand } = require('./commands');
const config = require('./config');

// Custom logger with child() method to fix the error
const logger = {
    child: (namespace) => {
        // This will return a new logger object with the given namespace
        return {
            log: (level, message) => {
                // Logging messages with the namespace
                console[level](`[${namespace.class}] ${message}`);
            }
        };
    },
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
