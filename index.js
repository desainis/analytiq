const SlackBot = require('slackbots');
const axios = require('axios');
var quoteService = require('./services/quote-end-point.js');

console.log(quoteService.fetchPriceforStock());

require('dotenv').config();

const bot = new SlackBot({
    token: process.env.token,
    name: "stockbot"
});

const help = `

• *Hey Stockbot*, What is the current _price_ of *MSFT*?

• *Hey Stockbot*, What is the current _price_ of *FLVT*?

• *Hey Stockbot*, What was the _price_ of *GOOG* _yesterday_?

• *Hey Stockbot*, What are the current _market projections_ for *AMZN*?

• *Hey Stockbot*, What is _recent news_ for stock *FB*?

• *Hey Stockbot*, What is _security symbol_ for *Microsoft*?
`

// Start Handler
bot.on('start', () => {

    const params = {
        icon_emoji: ':stockbot:',
        attachments: [
            {
                "fallback": "Stockbot Help",
                "color": "#2eb886",
                "title": "Stockbot Help",
                "text": help,
                "ts": (new Date).getTime() / 1000
            }
        ]
    };

    bot.postMessageToChannel(
        'general', 
        'Get Ready to Learn about Stocks `@stockbot`',
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

    if (data.text.includes("stockbot") && data.text.includes("help")) {
        getHelp(data.text);
    }

});

// Respond to data
function getHelp(message) {
    const params = {
        icon_emoji: ':stockbot:',
        attachments: [
            {
                "fallback": "Stockbot Help",
                "color": "#2eb886",
                "title": "Stockbot Help",
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