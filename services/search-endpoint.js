const axios = require('axios');
var utilsBase = require('./utils-base.js');

module.exports = {

    fetchBestMatchTickerSymbolforOrg: function(baseEndPoint, apiKey, keywords) {

        return utilsBase.getSearchResultsFromKeywords(baseEndPoint, apiKey, keywords)
        .then(res => {
            if (res.data.bestMatches.length > 0) {
                return res.data.bestMatches[0]["1. symbol"];
            }
        })
        .catch (error => {
            console.log(error);
        });
        
    }

};