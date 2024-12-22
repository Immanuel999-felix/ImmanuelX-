const { default: makeWASocket, initAuthCreds, BufferJSON, Browsers, DisconnectReason } = require('@whiskeysockets/baileys');
const fs = require('fs');
const readline = require('readline');
const { handleCommand } = require('./commands'); // Handles bot commands
const config = require('./config'); // Config file for your bot

// Authentication file to store session data
const authFile = './auth_info.json';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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
        browser: ['Immanuelx-MD', 'Chrome', '1.0'], // Customize your bot name
    });

    // Save credentials when updated
    conn.ev.on('creds.update', saveAuthState);

    // Handle incoming messages
    conn.ev.on('messages.upsert', async (msg) => {
        handleCommand(conn, msg, config.prefix); // Handle commands (custom logic)
    });

    console.log('Bot started successfully🙂!');
}

// Step 3: Request Pairing Code
async function requestPairingCode() {
    // Ask for the phone number
    rl.question('Please enter your phone number with country code🥺 (e.g., +2349126807818): ', async (phoneNumber) => {
        if (!phoneNumber) {
            console.log('Phone number is required!');
            return rl.close();
        }

        // Start the socket connection
        const { state, saveCreds } = await useMultiFileAuthState('./auth');
        const conn = makeWASocket({
            auth: { creds: state.creds, keys: state.keys },
            browser: Browsers.chrome('Chrome'),
        });

        // Save credentials when updated
        conn.ev.on('creds.update', saveCreds);

        // Request the pairing code
        try {
            const code = await conn.requestPairingCode(phoneNumber);
            console.log(`😌  Pairing Code : ${code}`);
        } catch (error) {
            console.error('Failed to request pairing code:', error);
        }

        // Close readline after the pairing code is displayed
        rl.close();
    });
}

// Check if credentials exist and either proceed or request pairing code
if (fs.existsSync(authFile)) {
    console.log('Auth file found, starting bot...');
    startBot();
} else {
    console.log('No auth file found, requesting pairing code...');
    requestPairingCode();
}
