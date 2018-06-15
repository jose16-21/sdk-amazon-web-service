const express = require('express');
const bodyParser = require('body-parser');
const aws = require('aws-sdk');
const app = express()

aws.config.loadFromPath('./config.json');
var dynamodb = new aws.DynamoDB();


app.use(bodyParser.urlencoded({ extended: true }))
app.listen(3000, function() {
    console.log('listening on 3000')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


app.post('/quotes', (req, res) => {
    var params = {
        TableName: "Supervisors",
        Item: {
            name: { S: req.body.name },
            company: { S: req.body.company },
            factory: { S: req.body.factory }
        }
    };

    dynamodb.putItem(params, function(err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data);
        }
    });
    console.log('saved to database');
    res.redirect('/')
})