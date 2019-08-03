const SlackBot = require('slackbots');
const axios = require('axios');

module.exports = {

    fetchPriceforStock: function(bot, base_endpoint, apiKey, stockSymbol) {

        axios.get(base_endpoint, {
                params: {
                    function: 'GLOBAL_QUOTE',
                    symbol: stockSymbol,
                    apikey: apiKey
                }
            })
            .then(res => {

                const params = {
                    icon_emoji: ':stockbot:'
                }

                var price = res.data['Global Quote']['05. price'];

                var response = 'The current price of security `' + stockSymbol + '` is `' + price + "USD`";

                bot.postMessageToChannel(
                    'general', 
                    response,
                    params
                );
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            });
    },
    fetchOpenPriceforStock: function(bot, base_endpoint, apiKey, stockSymbol) {
        // Get open price for stock

    },
    fetchPreviousClosePriceforStock: function(bot, base_endpoint, apiKey, stockSymbol) {
        // Get previous close price for stock

    },
    fetchHighPriceforStock: function(bot, base_endpoint, apiKey, stockSymbol) {
        // Get open price for stock

    },
    fetchLowPriceforStock: function(bot, base_endpoint, apiKey, stockSymbol) {
        // Get open price for stock

    },
    fetchVolumeforStock: function(bot, base_endpoint, apiKey, stockSymbol) {
        // Get trading volume for stock

    },
    fetchChangeforStock: function(bot, base_endpoint, apiKey, stockSymbol) {
        // Get change for stock

    },

};