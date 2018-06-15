// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 

AWS.config.loadFromPath('./config.json');
// Create the DynamoDB service object
ddb = new AWS.DynamoDB();

var params = {
    TableName: 'CUSTOMER_LIST',
    Item: {
        'CUSTOMER_ID': { N: '001' },
        'CUSTOMER_NAME': { S: 'Richard Roe' },
    }
};

// Call DynamoDB to add the item to the table
ddb.putItem(params, function(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data);
    }
});