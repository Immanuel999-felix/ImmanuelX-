const axios = require('axios');
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

/**
 * Downloads a buffer from a given URL.
 */
const getBuffer = async (url) => {
    const res = await axios({
        method: 'get',
        url,
        responseType: 'arraybuffer'
    });
    return res.data;
};

/**
 * Gets the group admins from a list of participants.
 */
const getGroupAdmins = (participants) => {
    return participants.filter(p => p.admin === 'admin' || p.admin === 'superadmin').map(p => p.id);
};

/**
 * Checks if a string is a valid URL.
 */
const isUrl = (url) => {
    const regex = /^(https?:\/\/[^\s]+)/;
    return regex.test(url);
};

/**
 * Fetches JSON data from a URL.
 */
const fetchJson = async (url, options) => {
    try {
        const res = await fetch(url, options);
        return await res.json();
    } catch (err) {
        return { error: err.message };
    }
};

module.exports = {
    getBuffer,
    getGroupAdmins,
    isUrl,
    fetchJson
};
