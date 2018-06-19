// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 

AWS.config.loadFromPath('./config.json');

// Create DynamoDB service object
var sns = new AWS.SNS();
var params = {
    EndpointArn: 'arn:aws:sns:us-west-2:539332898517:topiruler:5e4291c6-54c3-4d7c-ace6-cb23c5ed043d' /* required */
};
sns.deleteEndpoint(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data); // successful response
});