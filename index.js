// 6319657635:AAHV1daDS433iiqEluBdjV2IJk2ZCmX9dug

const axios = require('axios');

async function sendTelegramMessage(botToken, chatId, message) {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const data = {
        chat_id: chatId,
        text: message,
    };

    try {
        await axios.post(url, data);
        console.log('Telegram message sent successfully.');
    } catch (error) {
        console.error('Error sending Telegram message:', error.message);
    }
}

// const botToken = "6319657635:AAHV1daDS433iiqEluBdjV2IJk2ZCmX9dug";
// const chatId = "1377337356";
// const message = 'Integration tests failed! Check the build.';

const botToken = process.argv[2];
const chatIds = process.argv.slice(3);
const message = 'Integration tests failed! Check the build.';

sendTelegramMessage(botToken, chatId, message).then();