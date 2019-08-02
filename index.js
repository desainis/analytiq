const SlackBot = require('slackbots');
const axios = require('axios');
var quoteService = require('./services/quote-end-point.js');

require('dotenv').config();

const bot = new SlackBot({
    token: process.env.token,
    name: "Ross"
});

const help = `
*_ross help_* - Get usage help
*_ross price MSFT_* - Get Current Price of security MSFT
*_ross price GOOG <yesterday|10PM UTC|current>_* - Get price of security at time
*_ross symbol Microsoft_* - Get the security symbol for Company name "Microsoft" (Can be partial names)
`

// Start Handler
bot.on('start', () => {

    const params = {
        icon_emoji: ':stockbot:',
        attachments: [
            {
                "fallback": "Stockbot Help",
                "color": "#2eb886",
                "text": help,
                "ts": (new Date).getTime() / 1000
            }
        ]
    };

    bot.postMessageToChannel(
        'general', 
        '',
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
    
    if (data.text.includes("ross price")) {
        handleCurrentPriceForStock(data.text);
    }

    if (data.text.includes("ross") && data.text.includes("help")) {
        getHelp(data.text);
    }

});

// Respond to data
function getHelp(message) {
    const params = {
        icon_emoji: ':stockbot:',
        attachments: [
            {
                "color": "#2eb886",
                "text": help,
                "ts": (new Date).getTime() / 1000
            }
        ]
    };

    bot.postMessageToChannel(
        'general', 
        '',
        params
    );
}

// Respond to data
function handleCurrentPriceForStock(message) {
    var words = message.split(' ');

    var price = quoteService.fetchPriceforStock(bot, process.env.base_endpoint, process.env.api_key, words[2]);

}