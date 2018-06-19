// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 

AWS.config.loadFromPath('./config.json');

// Create DynamoDB service object
var sns = new AWS.SNS();
var params = {
    Protocol: 'SMS',
    /* required */
    TopicArn: 'arn:aws:sns:us-west-2:539332898517:topiruler',
    /* required */
    Endpoint: '+50258241702',
    ReturnSubscriptionArn: true || false
};
sns.subscribe(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data); // successful response
});
/*
{ ResponseMetadata: { RequestId: '68bc3a28-cfed-5826-88e5-698add06a24d' },
  SubscriptionArn: 'arn:aws:sns:us-west-2:539332898517:topiruler:5e4291c6-54c3-4d7c-ace6-cb23c5ed043d' }
*/