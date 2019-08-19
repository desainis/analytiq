const axios = require('axios');
var utilsBase = require('./utils.js');  

module.exports = {

    fetchPriceforStock: function(bot, baseEndPoint, apiKey, stockSymbol) {
        return utilsBase.getFieldfromQuoteEndPoint(baseEndPoint, apiKey, stockSymbol, '05. price')
        .then(price => {
            return price;
        })
        .catch (error => {
            console.log(error);
        });
        
    },

    fetchOpenPriceforStock: function(bot, baseEndPoint, apiKey, stockSymbol) {
        return utilsBase.getFieldfromQuoteEndPoint(baseEndPoint, apiKey, stockSymbol, '02. open')
        .then(price => {
            return price;
        })
        .catch (error => {
            console.log(error);
        });

    },

    fetchPreviousClosePriceforStock: function(bot, baseEndPoint, apiKey, stockSymbol) {
        return utilsBase.getFieldfromQuoteEndPoint(baseEndPoint, apiKey, stockSymbol, '08. previous close')
        .then(price => {
            return price;
        })
        .catch (error => {
            console.log(error);
        });

    },

    fetchHighPriceforStock: function(bot, baseEndPoint, apiKey, stockSymbol) {
        return utilsBase.getFieldfromQuoteEndPoint(baseEndPoint, apiKey, stockSymbol, '03. high')
        .then(price => {
            return price;
        })
        .catch (error => {
            console.log(error);
        });

    },

    fetchLowPriceforStock: function(bot, baseEndPoint, apiKey, stockSymbol) {
        return utilsBase.getFieldfromQuoteEndPoint(baseEndPoint, apiKey, stockSymbol, '04. low')
        .then(price => {
            return price;
        })
        .catch (error => {
            console.log(error);
        });

    },

    fetchVolumeforStock: function(bot, baseEndPoint, apiKey, stockSymbol) {
        return utilsBase.getFieldfromQuoteEndPoint(baseEndPoint, apiKey, stockSymbol, '06. volume')
        .then(volume => {
            return price;
        })
        .catch (error => {
            console.log(error);
        });

    },

    fetchChangeforStock: function(bot, baseEndPoint, apiKey, stockSymbol) {
        return utilsBase.getFieldfromQuoteEndPoint(baseEndPoint, apiKey, stockSymbol, '10. change percent')
        .then(change => {
            return price;
        })
        .catch (error => {
            console.log(error);
        });

    },

};