const axios = require('axios');
const { RTMClient } = require('@slack/rtm-api');
const { WebClient } = require('@slack/web-api');

require('dotenv').config();

const token = process.env.SLACK_TOKEN;
const rtm = new RTMClient(token);
const web = new WebClient(token);

var utilsBase = require('./utils-base.js');

// API Endpoints
var quoteEndPoint = require('./quote-end-point.js');
var searchEndPoint = require('./search-endpoint.js');

module.exports = {

    getHelp: function (rtm, web, help, slackChannel) {

        const params = [
            {
                "color": "#2eb886",
                "text": help,
                "ts": (new Date).getTime() / 1000
            }
        ];
        utilsBase.slackResponse(rtm, web, slackChannel, params, 'Usage:')

    },

    postHelpForInfoMessage: function (rtm, web, slackChannel) {

        utilsBase.slackResponse(rtm, web, slackChannel, [], 'I did not understand that. Try: `ross info <TICKER_SYMBOL>`. For example `ross info MSFT`.')
    },

    postInfoAboutOrganization: function (rtm, web, slackChannel, org, apiKey)  {

       utilsBase.getSearchResultsFromKeywords(process.env.BASE_ENDPOINT, apiKey, org)
       .then(res => {
            if (res.data.bestMatches.length > 0) {
                var tickerSymbol = res.data.bestMatches[0]["1. symbol"];
                var orgName = res.data.bestMatches[0]["2. name"];

                const params = [
                    {
                        "fallback": "Market Summary for `" + orgName + "`",
                        "color": "#2eb886",
                        "text": "Market Summary for `" + orgName + "`",
                        "fields": [
                            {
                                "title": "Name",
                                "value": orgName,
                                "short": true
                            },
                            {
                                "title": "Ticker Symbol",
                                "value": tickerSymbol,
                                "short": true
                            }
                        ],
                        "ts": (new Date).getTime() / 1000
                    }
                ];

                utilsBase.slackResponse(rtm, web, slackChannel, params, '')
            } 
       })
       .catch (error => {
           console.log(error);
       });

    },
}