// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 

AWS.config.loadFromPath('./config.json');

// Create DynamoDB service object
var ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

var params = {
    RequestItems: {
        'CUSTOMER_LIST': {
            Keys: [
                { '2': { S: 'dos ' } },
                { '3': { S: 'tres' } },
                { '4': { S: 'cuatro' } }
            ],
            ProjectionExpression: 'CUSTOMER_ID, CUSTOMER_NAME'
        }
    }
};

ddb.batchGetItem(params, function(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        data.Responses.TABLE_NAME.forEach(function(element, index, array) {
            console.log(element);
        });
    }
});