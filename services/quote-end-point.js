const axios = require('axios');
var utils = require('./utils.js');
var utilsSlack = require('./utils.js');

module.exports = {

    fetchPriceforStock: function(bot, baseEndPoint, apiKey, stockSymbol) {

        var promise = utils.getFieldfromQuoteEndPoint(baseEndPoint, apiKey, stockSymbol, '05. price')
        .then(price => {
            return price;
        });

        
    },

    fetchOpenPriceforStock: function(bot, baseEndPoint, apiKey, stockSymbol) {
        var promise = getFieldfromQuoteEndPoint(baseEndPoint, apiKey, stockSymbol, '02. open')
        .then(price => {
            return price;
        });

    },

    fetchPreviousClosePriceforStock: function(bot, baseEndPoint, apiKey, stockSymbol) {
        var promise = getFieldfromQuoteEndPoint(baseEndPoint, apiKey, stockSymbol, '08. previous close')
        .then(price => {
            return price;
        });

    },

    fetchHighPriceforStock: function(bot, baseEndPoint, apiKey, stockSymbol) {
        var promise = getFieldfromQuoteEndPoint(baseEndPoint, apiKey, stockSymbol, '03. high')
        .then(price => {
            return price;
        });

    },

    fetchLowPriceforStock: function(bot, baseEndPoint, apiKey, stockSymbol) {
        var promise = getFieldfromQuoteEndPoint(baseEndPoint, apiKey, stockSymbol, '04. low')
        .then(price => {
            return price;
        });

    },

    fetchVolumeforStock: function(bot, baseEndPoint, apiKey, stockSymbol) {
        var promise = getFieldfromQuoteEndPoint(baseEndPoint, apiKey, stockSymbol, '06. volume')
        .then(volume => {
            return price;
        });

    },

    fetchChangeforStock: function(bot, baseEndPoint, apiKey, stockSymbol) {
        var promise = getFieldfromQuoteEndPoint(baseEndPoint, apiKey, stockSymbol, '10. change percent')
        .then(change => {
            return price;
        });

    },

};