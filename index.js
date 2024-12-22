const readline = require('readline');
const { default: makeWASocket, useSingleFileAuthState } = require('@whiskeysockets/baileys');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function startBot() {
    const { state, saveCreds } = await useSingleFileAuthState('./auth_info.json');

    const conn = makeWASocket({
        auth: state,
        browser: ['My-Bot', 'Chrome', '1.0']
    });

    conn.ev.on('creds.update', saveCreds);

    // Request phone number
    rl.question('Please enter your phone number (e.g., +2349012345678): ', async (phoneNumber) => {
        try {
            // Logic for requesting pairing code (check Baileys docs for exact method)
            console.log(`Sending pairing code to ${phoneNumber}...`);
            // Example placeholder (you need to add the exact implementation if Baileys supports this):
            await conn.requestPairingCode(phoneNumber); // This is not a real method; placeholder only.
            console.log('Pairing code sent successfully.');
        } catch (err) {
            console.error('Error sending pairing code:', err);
        } finally {
            rl.close();
        }
    });
}

startBot().catch((err) => {
    console.error('Error starting bot:', err);
});
