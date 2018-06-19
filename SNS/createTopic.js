// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 

AWS.config.loadFromPath('./config.json');

// Create DynamoDB service object
var sns = new AWS.SNS();

var params = {
    Name: 'STRING12' /* required */
};
sns.createTopic(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data); // successful response
});

/*
{ ResponseMetadata: { RequestId: '10eb3ea7-5bd2-5323-a36c-6d055402f389' },
  TopicArn: 'arn:aws:sns:us-west-2:539332898517:STRING12' }
*/