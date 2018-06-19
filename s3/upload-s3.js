// Example Node.js AWS Polly Script that saves an mp3 file to S3
const AWS = require('aws-sdk')

AWS.config.loadFromPath('./config.json');

const s3 = new AWS.S3();

let s3params = {
    Body: "stream",
    Bucket: "laravel-data-name",
    Key: "chapo3.jpg",
    ACL: "public-read"
};

s3.upload(s3params, function(err, data) {
    if (err) {
        console.log(err.message);
    } else {
        console.log(data.Location);
    }
});
/*https://laravel-data-name.s3.us-west-2.amazonaws.com/chapo3.jpg*/