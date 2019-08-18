const axios = require('axios');
const { RTMClient } = require('@slack/rtm-api');
const { WebClient } = require('@slack/web-api');

require('dotenv').config();

const token = process.env.SLACK_TOKEN;
const rtm = new RTMClient(token);
const web = new WebClient(token);

var utils = require('./utils.js');

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

}