require('dotenv').config();

module.exports = {

    analyzeSlackMessageEntities: async function (text) {// Imports the Google Cloud client library
        const language = require('@google-cloud/language');

        // Creates a client
        const client = new language.LanguageServiceClient();

        // Prepares a document, representing the provided text
        const document = {
            content: text,
            type: 'PLAIN_TEXT',
        };

        // Detects the sentiment of the document
        const [result] = await client.analyzeEntities({document});

        const entities = result.entities;
        var org = '';

        
        entities.forEach(entity => {
            
            if (entity.type == 'ORGANIZATION') {
                org = entity.name;
            }
        });
        
        if (org !== '') {
            return org;
        }
    }

}