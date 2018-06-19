// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 

AWS.config.loadFromPath('./config.json');

// Create DynamoDB service object
var sns = new AWS.SNS();
var params = {

};
sns.listTopics(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data); // successful response
});
/*
{ ResponseMetadata: { RequestId: '42f87918-348e-5bae-97ef-2aba249855bb' },
  Topics:
   [ { TopicArn: 'arn:aws:sns:us-west-2:539332898517:11111111' },
     { TopicArn: 'arn:aws:sns:us-west-2:539332898517:121212' },
     { TopicArn: 'arn:aws:sns:us-west-2:539332898517:topiruler' } ] }*/