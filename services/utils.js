const axios = require('axios');
const { RTMClient } = require('@slack/rtm-api');
const { WebClient } = require('@slack/web-api');

require('dotenv').config();

const token = process.env.SLACK_TOKEN;
const rtm = new RTMClient(token);
const web = new WebClient(token);

var utilsSlack = require('./utils-slack.js');

module.exports = {

    // API Helpers
    getFieldfromQuoteEndPoint: function (baseEndPoint, apiKey, stockSymbol, field) {

        return axios.get(baseEndPoint, {
                params: {
                    function: 'GLOBAL_QUOTE',
                    symbol: stockSymbol,
                    apikey: apiKey
                }
            })
            .then(res => {
    
                var price = res.data['Global Quote'][field];
                return price;
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            });
    },

    getPayloadfromQuoteEndPoint: function (baseEndPoint, apiKey, stockSymbol) {

        return axios.get(baseEndPoint, {
                params: {
                    function: 'GLOBAL_QUOTE',
                    symbol: stockSymbol,
                    apikey: apiKey
                }
            })
            .then(res => {
    
                return res;
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            });
    },

    getHelp: function (rtm, web, help, slackChannel) {

        const params = [
            {
                "color": "#2eb886",
                "text": help,
                "ts": (new Date).getTime() / 1000
            }
        ];
        utilsSlack.slackResponse(rtm, web, slackChannel, params, 'Usage:')

    },

    postHelpForInfoMessage: function (rtm, web, slackChannel) {

        utilsSlack.slackResponse(rtm, web, slackChannel, [], 'I did not understand that. Try: `ross info <TICKER_SYMBOL>`. For example `ross info MSFT`.')
    },

    getInfoAboutTickerSymbol: function (rtm, web, help, slackChannel, tickerSymbol, apiKey)  {

        const params = [
            {
                "fallback": "Information for security `${tickerSymbol}`",
                "color": "#2eb886",
                "title": "Information for security `${tickerSymbol}`",
                "title_link": "https://finance.yahoo.com/quote/${tickerSymbol}?p=${tickerSymbol}",
                "text": "Information for security `${tickerSymbol}`",
                "fields": [
                    {
                        "title": "Security Symbol",
                        "value": tickerSymbol,
                        "short": false
                    },
                    {
                        "title": "Security Symbol",
                        "value": tickerSymbol,
                        "short": false
                    },
                ],
                "image_url": "http://my-website.com/path/to/image.jpg",
                "thumb_url": "http://example.com/path/to/thumb.png",
                "footer": "Slack API",
                "footer_icon": "https://platform.slack-edge.com/img/default_application_icon.png",
                "ts": 123456789
            }
        ];
        utilsSlack.slackResponse(rtm, web, slackChannel, params, '')

    },
}