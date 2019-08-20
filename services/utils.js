const axios = require('axios');
const {
    RTMClient
} = require('@slack/rtm-api');
const {
    WebClient
} = require('@slack/web-api');

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

        const params = [{
            "color": "#2eb886",
            "text": help,
            "ts": (new Date).getTime() / 1000
        }];
        utilsBase.slackResponse(rtm, web, slackChannel, params, 'Usage:')

    },

    postHelpForInfoMessage: function (rtm, web, slackChannel) {

        utilsBase.slackResponse(rtm, web, slackChannel, [], 'I did not understand that. Try: `ross info <TICKER_SYMBOL>`. For example `ross info MSFT`.')
    },

    postInfoAboutOrganization: function (rtm, web, slackChannel, org, apiKey) {

        var searchResults = utilsBase.getSearchResultsFromKeywords(process.env.BASE_ENDPOINT, apiKey, org);
        var basicInformation = searchResults.then(function (results) {
                var ticker = results.bestMatches[0]["1. symbol"];
                return utilsBase.getPayloadfromQuoteEndPoint(process.env.BASE_ENDPOINT, apiKey, ticker);
            })
            .catch(function (error) {
                console.log(error);
            });

        Promise.all([searchResults, basicInformation]).then(function ([searchRes, basicInfo]) {

                // search results
                var tickerSymbol = searchRes.bestMatches[0]["1. symbol"];
                var orgName = searchRes.bestMatches[0]["2. name"];

                // basic information
                var base = basicInfo["Global Quote"];
                var openPrice = base["02. open"]; //
                var highPrice = base["03. high"]; // 
                var lowPrice = base["04. low"]; // 
                var currentPrice = base["05. price"]; //
                var tradingVolume = base["06. volume"];
                var latestTradingDay = base["07. latest trading day"]; //
                var previousClose = base["08. previous close"]; //
                var changePrice = base["09. change"]; //
                var changePercent = base["10. change percent"]; //

                const params = [{
                    "fallback": "Market Summary for `" + orgName + "` as of `" + latestTradingDay + "`",
                    "color": "#2eb886",
                    "text": "Market Summary for `" + orgName + "` as of `" + latestTradingDay + "`",
                    "fields": [{
                            "title": "Ticker Symbol",
                            "value": tickerSymbol,
                            "short": true
                        },
                        {
                            "title": "Current Price (USD)",
                            "value": currentPrice,
                            "short": true
                        },
                        {
                            "title": "Open Price (USD)",
                            "value": openPrice,
                            "short": true
                        },
                        {
                            "title": "High Price (USD)",
                            "value": highPrice,
                            "short": true
                        },
                        {
                            "title": "Low Price (USD)",
                            "value": lowPrice,
                            "short": true
                        },
                        {
                            "title": "Previous Close Price (USD)",
                            "value": previousClose,
                            "short": true
                        },
                        {
                            "title": "Change in Price (USD)",
                            "value": changePrice,
                            "short": true
                        },
                        {
                            "title": "Change Percentage",
                            "value": changePercent,
                            "short": true
                        },
                        {
                            "title": "Trading Volume",
                            "value": tradingVolume,
                            "short": true
                        }
                    ],
                    "ts": (new Date).getTime() / 1000
                }];

                utilsBase.slackResponse(rtm, web, slackChannel, params, '')

            })
            .catch(function (error) {
                console.log(error);
            });

    },
}