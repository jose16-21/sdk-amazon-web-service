var AWS = require('aws-sdk');


AWS.config.loadFromPath('./config.json');

var dynamodb = new AWS.DynamoDB();

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


var params = {
    TableName: "Users",
    KeySchema: [
        { AttributeName: "email", KeyType: "HASH" }
    ],
    AttributeDefinitions: [
        { AttributeName: "email", AttributeType: "S" }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    }
};


dynamodb.createTable(params, function(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data);
    }
});
var params = {
    TableName: "Logins",
    KeySchema: [
        { AttributeName: "email", KeyType: "HASH" },
        { AttributeName: "timestamp", KeyType: "RANGE" }
    ],
    AttributeDefinitions: [
        { AttributeName: "email", AttributeType: "S" },
        { AttributeName: "timestamp", AttributeType: "N" }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    }
};

dynamodb.createTable(params, function(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data);
    }
});

var params = {
    TableName: "Supervisors",
    KeySchema: [
        { AttributeName: "name", KeyType: "HASH" }
    ],
    AttributeDefinitions: [
        { AttributeName: "name", AttributeType: "S" },
        { AttributeName: "company", AttributeType: "S" },
        { AttributeName: "factory", AttributeType: "S" }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    },
    GlobalSecondaryIndexes: [{
        IndexName: "FactoryIndex",
        KeySchema: [{
                AttributeName: "company",
                KeyType: "HASH"
            },
            {
                AttributeName: "factory",
                KeyType: "RANGE"
            }
        ],
        Projection: {
            ProjectionType: "ALL"
        },
        ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1
        }
    }]
};
// Call DynamoDB to create the table

dynamodb.createTable(params, function(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data);
    }
});

var params = {
    TableName: "Companies",
    KeySchema: [
        { AttributeName: "name", KeyType: "HASH" },
        { AttributeName: "subsidiary", KeyType: "RANGE" }
    ],
    AttributeDefinitions: [
        { AttributeName: "name", AttributeType: "S" },
        { AttributeName: "subsidiary", AttributeType: "S" },
        { AttributeName: "ceo", AttributeType: "S" }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    },
    LocalSecondaryIndexes: [{
        IndexName: "CeoIndex",
        KeySchema: [{
                AttributeName: "name",
                KeyType: "HASH"
            },
            {
                AttributeName: "ceo",
                KeyType: "RANGE"
            }
        ],
        Projection: {
            ProjectionType: "ALL"
        }
    }]
};

dynamodb.createTable(params, function(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data);
    }
});