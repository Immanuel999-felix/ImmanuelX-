module.exports = async (conn, mek) => {
    const { from, groupName, isGroup } = mek;
    if (!isGroup) return;

    conn.sendMessage(from, { text: `Welcome to ${groupName}!` });
};
