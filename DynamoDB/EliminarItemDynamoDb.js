// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.loadFromPath('./config.json');

// Create the DynamoDB service object
ddb = new AWS.DynamoDB();

var params = {
    TableName: 'CUSTOMER_LIST',
    Key: {
        'CUSTOMER_ID': { N: '001' },
    }
};

// Call DynamoDB to delete the item from the table
ddb.deleteItem(params, function(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data);
    }
});