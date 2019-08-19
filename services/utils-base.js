const axios = require('axios');

require('dotenv').config();

module.exports = {

    // Slack Responses
    slackResponse: function (rtm, web, slackChannel, params, text) {
        (async () => {
            // See: https://api.slack.com/methods/chat.postMessage

            const res = await web.chat.postMessage({
                channel: slackChannel,
                text: text,
                attachments: params
            });

            // `res` contains information about the posted message
            console.log('Message sent');
        })();
    },

    getSearchResultsFromKeywords: function (baseEndPoint, apiKey, keywords) {

        return axios.get(baseEndPoint, {
                params: {
                    function: 'SYMBOL_SEARCH',
                    keywords: keywords,
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

}