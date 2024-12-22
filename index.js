const { default: makeWASocket, initAuthCreds, BufferJSON } = require('@whiskeysockets/baileys');
const fs = require('fs');
const { handleCommand } = require('./commands'); // Handles bot commands
const config = require('./config'); // Config file for your bot

// Authentication file to store session data
const authFile = './auth_info.json';

// Step 1: Initialize or Load Authentication State
let authState = {
    creds: initAuthCreds(), // Create new credentials
    keys: {} // Placeholder for session keys
};

// Load auth state from file if it exists
if (fs.existsSync(authFile)) {
    authState = JSON.parse(fs.readFileSync(authFile, 'utf-8'), BufferJSON.reviver);
}

// Save updated auth state back to the file
function saveAuthState() {
    fs.writeFileSync(authFile, JSON.stringify(authState, BufferJSON.replacer, 2));
}

// Step 2: Start the Bot
async function startBot() {
    const conn = makeWASocket({
        auth: {
            creds: authState.creds, // Bot credentials
            keys: {
                get: async (type, ids) => ids.map((id) => authState.keys[type]?.[id]),
                set: async (type, keys) => {
                    authState.keys[type] = { ...authState.keys[type], ...keys };
                    saveAuthState(); // Save whenever keys are updated
                },
            },
        },
        browser: ['My-Bot', 'Chrome', '1.0'], // Customize your bot name
    });

    // Save credentials when updated
    conn.ev.on('creds.update', saveAuthState);

    // Handle incoming messages
    conn.ev.on('messages.upsert', async (msg) => {
        handleCommand(conn, msg, config.prefix); // Handle commands (custom logic)
    });

    console.log('Bot started successfully!');
}

// Step 3: Run the Bot
startBot();
