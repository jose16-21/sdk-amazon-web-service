const express = require('express');
const bodyParser = require('body-parser');
const aws = require('aws-sdk');
const app = express()

aws.config.loadFromPath('./config.json');
const dynamodb = new aws.DynamoDB();
const unmarshalItem = require('dynamodb-marshaler').unmarshalItem;


app.use(bodyParser.urlencoded({ extended: true }))
app.listen(3000, function() {
    console.log('listening on 3000')
})

app.get('/', (req, res) => {
    var result = [];
    var params = {
        TableName: "Supervisors"
    }
    dynamodb.scan(params, function(err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            res.render('index.ejs', { quotes: data.Items.map(unmarshalItem) });
        }
    });


})

app.get('/eliminar/:id', (req, res) => {
    console.log(req.params.id);
    var id = req.params.id;
    var params = {
        TableName: 'Supervisors',
        Key: {
            'name': { id },
        }
    };

    // Call DynamoDB to delete the item from the table
    dynamodb.deleteItem(params, function(err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data);
        }
    });
    console.log('deleted');
    res.redirect('/')
});

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