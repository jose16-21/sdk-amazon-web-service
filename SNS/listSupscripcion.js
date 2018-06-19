// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 

AWS.config.loadFromPath('./config.json');

// Create DynamoDB service object
var sns = new AWS.SNS();
var params = {};
sns.listSubscriptions(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data); // successful response
});
/*{ ResponseMetadata: { RequestId: 'a59c31f6-21f6-5b15-8a2a-625434ebf8e7' },
  Subscriptions:
   [ { SubscriptionArn: 'arn:aws:sns:us-west-2:539332898517:topiruler:5e4291c6-54c3-4d7c-ace6-cb23c5ed043d',
       Owner: '539332898517',
       Protocol: 'sms',
       Endpoint: '+50258241702',
       TopicArn: 'arn:aws:sns:us-west-2:539332898517:topiruler' }]
}*/