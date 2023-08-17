const axios = require('axios');

async function sendTelegramMessage(botToken, chatId, message) {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const data = {
        chat_id: chatId,
        text: message,
    };

    try {
        await axios.post(url, data);
        console.log(`Telegram message sent to chat ID ${chatId} successfully.`);
    } catch (error) {
        console.error(`Error sending Telegram message to chat ID ${chatId}:`, error.message);
    }
}

const botToken = process.argv[2];
const chatIds = process.argv[3].split(',');
const message = `Integration tests failed! Check the build. ${chatIds.join(', ')}`;

for (const chatId of chatIds) {
    sendTelegramMessage(botToken, chatId, message).then();
}
