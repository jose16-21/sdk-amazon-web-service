// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 

AWS.config.loadFromPath('./config.json');

// Create DynamoDB service object
var sns = new AWS.SNS();
var params = {
    Message: 'mensaje que se configuro para envio de topic',
    PhoneNumber: '+50258241702',
};
sns.publish(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data); // successful response
});
/*{ ResponseMetadata: { RequestId: '48bc2f31-9c9b-551b-bc61-7c9384081503' },
  MessageId: '685e9d03-df23-575e-a824-cea1c7b08746' }*/