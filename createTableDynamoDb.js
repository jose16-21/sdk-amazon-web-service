var AWS = require('aws-sdk');
var uuid = require('uuid');

AWS.config.loadFromPath('./config.json');
ddb = new AWS.DynamoDB();

var params = {
    AttributeDefinitions: [{
            AttributeName: 'CUSTOMER_ID',
            AttributeType: 'N'
        },
        {
            AttributeName: 'CUSTOMER_NAME',
            AttributeType: 'S'
        }
    ],
    KeySchema: [{
            AttributeName: 'CUSTOMER_ID',
            KeyType: 'HASH'
        },
        {
            AttributeName: 'CUSTOMER_NAME',
            KeyType: 'RANGE'
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    },
    TableName: 'CUSTOMER_LIST',
    StreamSpecification: {
        StreamEnabled: false
    }
};

// Call DynamoDB to create the table
ddb.createTable(params, function(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data);
    }
});