const axios = require('axios');
const { RTMClient } = require('@slack/rtm-api');
const { WebClient} = require('@slack/web-api');

// Services
var quoteService = require('./services/quote-end-point.js');
var utils = require('./services/utils.js');

// NLP Services
var messageAnalysisSvc = require('./services/nlp/sentiment-analysis.js');


require('dotenv').config();

// Application
const token = process.env.SLACK_TOKEN;
const rtm = new RTMClient(token);
const web = new WebClient(token);
const help = `
*_ross help_* - Get usage help
*_ross info <TICKER_SYMBOL>_* - Get information about a ticker symbol
`

rtm.start()
    .catch(console.error);

rtm.on('channel_joined', (event) => {
    utils.getHelp(rtm, web, help, event.channel.id);

});

rtm.on('message', (event) => {

    if (event.type !== 'message') {
        return;
    }

    var organization = messageAnalysisSvc.analyzeSlackMessageEntities(event.text)
    .then(org => {
        utils.postInfoAboutOrganization(rtm, web, event.channel, org, process.env.AV_API_KEY);
    });

    if (event.text.includes("ross help")) {
        utils.getHelp(rtm, web, help, event.channel);
    }

});