var AWS = require('aws-sdk');


AWS.config.loadFromPath('./config.json');


var dynamodb = new AWS.DynamoDB();

var params = {
    TableName: "Users",
    Item: {
        email: { S: "jon@doe.com" },
        fullname: { S: "Jon Doe" },
        nombre: { S: "dato adicional" }
    }
};
dynamodb.putItem(params, function(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data);
    }
});

var batchRequest = {
    RequestItems: {
        "Logins": [{
                PutRequest: {
                    Item: {
                        "email": { S: "jon@doe.com" },
                        "timestamp": { N: "1467041009976" }
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        "email": { S: "jon@doe.com" },
                        "timestamp": { N: "1467041019976" }
                    }
                }
            }
        ]
    }
};
dynamodb.batchWriteItem(batchRequest, function(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data);
    }
});


var params2 = {
    TableName: "Supervisors",
    Item: {
        name: { S: "Random SuperVisor" },
        company: { S: "Random Company" },
        factory: { S: "Jon Doe" }
    }
};

dynamodb.putItem(params2, function(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data);
    }
});