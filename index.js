const SlackBot = require('slackbots');
const axios = require('axios');
var quoteService = require('./services/quote-end-point.js');

require('dotenv').config();

const bot = new SlackBot({
    token: process.env.token,
    name: "Ross"
});

const help = `Hi I'm Ross, Your handy dandy bot that knows everything about Stocks. Try asking:\n
\`ross help\` - Get usage help
\`ross price MSFT\` - Get Current Price of security MSFT
\`ross price GOOG <yesterday|10PM UTC|current>\` - Get price of security at time
\`ross symbol Microsoft\` - Get the security symbol for Company name "Microsoft"
`

// Start Handler
bot.on('start', () => {

    const params = {
        icon_emoji: ':ross:',
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
        icon_emoji: ':ross:',
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