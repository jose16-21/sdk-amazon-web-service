// Example Node.js AWS Polly Script that saves an mp3 file to S3
const AWS = require('aws-sdk')

AWS.config.loadFromPath('./config.json');
var rekognition = new AWS.Rekognition();

var params = {
    SourceImage: { /* required */
        S3Object: {
            Bucket: 'laravel-data-name',
            Name: 'chapo.jpg'
        }
    },
    TargetImage: { /* required */
        S3Object: {
            Bucket: 'laravel-data-name',
            Name: 'chapo3.jpg'
        }
    },
    SimilarityThreshold: 0.0
};
rekognition.compareFaces(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data); // successful response
});