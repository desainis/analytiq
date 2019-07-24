const SlackBot = require('slackbots');
const axios = require('axios');

require('dotenv').config();

const bot = new SlackBot({
    token: process.env.token,
    name: "stockbot"
})

// Start Handler
bot.on('start', () => {

    const params = {
        icon_emoji: ':stockbot:'
    }

    bot.postMessageToChannel(
        'general', 
        'Get Ready to Learn about Stocks @stockbot',
        params
    );

});

// Error Handler 
bot.on('error', (err) => console.log(err));

// Message Handler
bot.on('message', (data) => {
    if (data.type !== 'message') {
        return;
    }
    
    if (data.text.includes("stockbot price")) {
        handleCurrentPriceForStock(data.text);
    }

});

// Respond to data
function handleCurrentPriceForStock(message) {
    var words = message.split(' ');
    console.log(words);

    const params = {
        icon_emoji: ':stockbot:'
    }

    var response = 'You asked for the price of stock - ' + words[2];
    bot.postMessageToChannel(
        'general', 
        response,
        params
    );
}