const SlackBot = require('slackbots');
const axios = require('axios');

require('dotenv').config({
    path: '../.env'
});

module.exports = function() {

    this.fetchPriceforStock = function(apiKey, stockSymbol) {
        // Get current price for security stockSymbol

    };

    this.fetchOpenPriceforStock = function(apiKey, stockSymbol) {
        // Get open price for stock

    };

    this.fetchPreviousClosePriceforStock = function(apiKey, stockSymbol) {
        // Get previous close price for stock

    };

    this.fetchHighPriceforStock = function(apiKey, stockSymbol) {
        // Get open price for stock

    };

    this.fetchLowPriceforStock = function(apiKey, stockSymbol) {
        // Get open price for stock

    };

    this.fetchVolumeforStock = function(apiKey, stockSymbol) {
        // Get trading volume for stock

    };

    this.fetchChangeforStock = function(apiKey, stockSymbol) {
        // Get change for stock

    };

    this.respondForPriceforStock = function(apiKey, stockSymbol) {
        // Get current price for security stockSymbol

    };

    this.respondForOpenPriceforStock = function(apiKey, stockSymbol) {
        // Get open price for stock

    };

    this.respondForPreviousClosePriceforStock = function(apiKey, stockSymbol) {
        // Get previous close price for stock

    };

    this.respondForHighPriceforStock = function(apiKey, stockSymbol) {
        // Get open price for stock

    };

    this.respondForLowPriceforStock = function(apiKey, stockSymbol) {
        // Get open price for stock

    };

    this.respondForVolumeforStock = function(apiKey, stockSymbol) {
        // Get trading volume for stock

    };

    this.respondForChangeforStock = function(apiKey, stockSymbol) {
        // Get change for stock

    };

}