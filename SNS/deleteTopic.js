// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 

AWS.config.loadFromPath('./config.json');

// Create DynamoDB service object
var sns = new AWS.SNS();

var params = {
    TopicArn: 'arn:aws:sns:us-west-2:539332898517:11111111' /* required */
};
sns.deleteTopic(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data); // successful response
});
/*
si es exitoso
{ ResponseMetadata: { RequestId: '99d520fd-602e-57ed-ae8d-735f70dff6fe' } }
*/