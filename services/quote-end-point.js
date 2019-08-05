const SlackBot = require('slackbots');
const axios = require('axios');

function getFieldfromQuoteEndPoint(baseEndPoint, apiKey, stockSymbol, field) {

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
}

module.exports = {

    fetchPriceforStock: function(bot, baseEndPoint, apiKey, stockSymbol) {

        var promise = getFieldfromQuoteEndPoint(baseEndPoint, apiKey, stockSymbol, '05. price')
        .then(price => {
            const params = {
                icon_emoji: ':ross:'
            }

            var response = 'The current price of security `' + stockSymbol + '` is `' + price + "USD`";

            bot.postMessageToChannel(
                'general', 
                response,
                params
            );
        });

        
    },

    fetchOpenPriceforStock: function(bot, baseEndPoint, apiKey, stockSymbol) {
        var promise = getFieldfromQuoteEndPoint(baseEndPoint, apiKey, stockSymbol, '02. open')
        .then(price => {
            const params = {
                icon_emoji: ':ross:'
            }

            var response = 'The current open price of security `' + stockSymbol + '` is `' + price + "USD`";

            bot.postMessageToChannel(
                'general', 
                response,
                params
            );
        });

    },

    fetchPreviousClosePriceforStock: function(bot, baseEndPoint, apiKey, stockSymbol) {
        var promise = getFieldfromQuoteEndPoint(baseEndPoint, apiKey, stockSymbol, '08. previous close')
        .then(price => {
            const params = {
                icon_emoji: ':ross:'
            }

            var response = 'The previous close price of security `' + stockSymbol + '` is `' + price + "USD`";

            bot.postMessageToChannel(
                'general', 
                response,
                params
            );
        });

    },

    fetchHighPriceforStock: function(bot, baseEndPoint, apiKey, stockSymbol) {
        var promise = getFieldfromQuoteEndPoint(baseEndPoint, apiKey, stockSymbol, '03. high')
        .then(price => {
            const params = {
                icon_emoji: ':ross:'
            }

            var response = 'The previous high price of security `' + stockSymbol + '` is `' + price + "USD`";

            bot.postMessageToChannel(
                'general', 
                response,
                params
            );
        });

    },

    fetchLowPriceforStock: function(bot, baseEndPoint, apiKey, stockSymbol) {
        var promise = getFieldfromQuoteEndPoint(baseEndPoint, apiKey, stockSymbol, '04. low')
        .then(price => {
            const params = {
                icon_emoji: ':ross:'
            }

            var response = 'The previous low price of security `' + stockSymbol + '` is `' + price + "USD`";

            bot.postMessageToChannel(
                'general', 
                response,
                params
            );
        });

    },

    fetchVolumeforStock: function(bot, baseEndPoint, apiKey, stockSymbol) {
        var promise = getFieldfromQuoteEndPoint(baseEndPoint, apiKey, stockSymbol, '06. volume')
        .then(volume => {
            const params = {
                icon_emoji: ':ross:'
            }

            var response = 'The current volume of security `' + stockSymbol + '` is `' + volume + "`";

            bot.postMessageToChannel(
                'general', 
                response,
                params
            );
        });

    },

    fetchChangeforStock: function(bot, baseEndPoint, apiKey, stockSymbol) {
        var promise = getFieldfromQuoteEndPoint(baseEndPoint, apiKey, stockSymbol, '10. change percent')
        .then(change => {
            const params = {
                icon_emoji: ':ross:'
            }

            var response = 'The previous change percent of security `' + stockSymbol + '` is `' + change + "%`";

            bot.postMessageToChannel(
                'general', 
                response,
                params
            );
        });

    },

};