const { default: makeWASocket, useSingleFileAuthState } = require('@whiskeysockets/baileys');
const { handleCommand } = require('./commands');
const config = require('./config');

// Custom logger with child() method to fix the error
const logger = {
    child: (namespace) => {
        return {
            log: (level, message) => {
                // This will log messages with the provided namespace (e.g., class: 'ns')
                console[level](`[${namespace.class}] ${message}`);
            }
        };
    },
    debug: console.debug,
    info: console.info,
    warn: console.warn,
    error: console.error
};

// Step 1: Initialize the authState (use the `useSingleFileAuthState` hook)
const { state, saveState } = useSingleFileAuthState('./auth_info.json'); // Path to your saved session

async function startBot() {
    // Step 2: Create the connection with authState and logger
    const conn = makeWASocket({
        authState: state,  // Pass the authState here
        logger,             // Use the custom logger here
        browser: ['Immanuelx-MD', 'Chrome', '1.0'],
    });

    // Save the authState after the connection is established
    conn.ev.on('auth-state.update', (update) => {
        if (update?.creds) {
            saveState(update.creds);  // Save the updated creds to the file
        }
    });

    conn.ev.on('messages.upsert', async (message) => {
        handleCommand(conn, message, config.prefix);
    });

    console.log('Bot started successfully!🙂');
}

startBot();
