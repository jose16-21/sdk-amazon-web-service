// Example Node.js AWS Polly Script that saves an mp3 file to S3
const AWS = require('aws-sdk')

AWS.config.loadFromPath('./config.json');

const Polly = new AWS.Polly({
    signatureVersion: 'v4'
})

const s3 = new AWS.S3();

let pollyparams = {
    //    'Text': '<speak>Hello, this is an example Node.js script which plays an audio stream converted by AWS Polly. <amazon:effect name="whispered"><prosody rate="slow">It is really cool.</prosody></amazon:effect></speak>',
    //  'TextType': "ssml",
    'Text': 'Los afectados por la erupción no tuvieron otra opción que dejar a sus mascotas al resguardo de sus bienes, pues temen que delincuentes aprovechen la oscuridad y entren a robar.',
    'OutputFormat': 'mp3',
    'VoiceId': 'Miguel'
}

Polly.synthesizeSpeech(pollyparams, (err, data) => {
    if (err) {
        console.log(err.message)
    } else if (data) {
        let s3params = {
            Body: data.AudioStream,
            Bucket: "laravel-data-name",
            Key: "prensa-libre-español.mp3",
            ACL: "public-read"
        };

        s3.upload(s3params, function(err, data) {
            if (err) {
                console.log(err.message);
            } else {
                console.log(data.Location);
            }
        });
    }
})