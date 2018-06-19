// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.loadFromPath('./config.json');
var translate = new AWS.Translate();
var params = {
    SourceLanguageCode: 'auto',
    /* required */
    TargetLanguageCode: 'en',
    /* required */
    Text: 'Podrias ayudarme necesito verificar algo en linea' /* required */
};
translate.translateText(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data); // successful response
});