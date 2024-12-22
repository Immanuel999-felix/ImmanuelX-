module.exports.commands = [
    {
        pattern: 'ping',
        function: async (conn, mek, m, options) => {
            const { reply } = options;
            reply('Pong! Bot is running.');
        }
    },
    {
        pattern: 'echo',
        function: async (conn, mek, m, options) => {
            const { reply, args } = options;
            if (args.length === 0) return reply('Please provide a message to echo.');
            reply(args.join(' '));
        }
    }
];
