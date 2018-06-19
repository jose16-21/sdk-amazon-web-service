// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 

AWS.config.loadFromPath('./config.json');

// Create DynamoDB service object
var sns = new AWS.SNS();
var params = {
    TopicArn: 'arn:aws:sns:us-west-2:539332898517:topiruler'
};
sns.listSubscriptionsByTopic(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data); // successful response
    })
    /*{ ResponseMetadata: { RequestId: 'd09b62e1-dc32-5038-a743-3143cba2a470' },
      Subscriptions:
       [ { SubscriptionArn: 'arn:aws:sns:us-west-2:539332898517:topiruler:5e4291c6-54c3-4d7c-ace6-cb23c5ed043d',
           Owner: '539332898517',
           Protocol: 'sms',
           Endpoint: '+50258241702',
           TopicArn: 'arn:aws:sns:us-west-2:539332898517:topiruler' },
         { SubscriptionArn: 'arn:aws:sns:us-west-2:539332898517:topiruler:09044b15-641a-40e6-897a-fd231bc3f2fd',
           Owner: '539332898517',
           Protocol: 'email',
           Endpoint: 'ju16jo@gmail.com',
           TopicArn: 'arn:aws:sns:us-west-2:539332898517:topiruler' },
         { SubscriptionArn: 'arn:aws:sns:us-west-2:539332898517:topiruler:89eaf0e1-4aa8-47c4-a53a-f67db3a72165',
           Owner: '539332898517',
           Protocol: 'email',
           Endpoint: 'jhernandez@e-solutions.com.gt',
           TopicArn: 'arn:aws:sns:us-west-2:539332898517:topiruler' } ] }*/