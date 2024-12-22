const { jidNormalizedUser } = require('@whiskeysockets/baileys');

/**
 * Processes an incoming message.
 */
const sms = (conn, message) => {
    const m = {};
    m.id = message.key.id;
    m.isGroup = message.key.remoteJid.endsWith('@g.us');
    m.sender = jidNormalizedUser(message.key.participant || message.key.remoteJid);
    m.type = Object.keys(message.message)[0];
    m.text = message.message.conversation || '';
    return m;
};

module.exports = {
    sms
};
