// Load the SDK
const AWS = require('aws-sdk')
AWS.config.loadFromPath('./config.json');
const Fs = require('fs')

// Create an Polly client
const Polly = new AWS.Polly({
    signatureVersion: 'v4'
})

let params = {
    'Text': 'Los afectados por la erupción no tuvieron otra opción que dejar a sus mascotas al resguardo de sus bienes, pues temen que delincuentes aprovechen la oscuridad y entren a robar.',
    'OutputFormat': 'mp3',
    'VoiceId': 'Miguel'
}

Polly.synthesizeSpeech(params, (err, data) => {
    if (err) {
        console.log(err.code)
    } else if (data) {
        if (data.AudioStream instanceof Buffer) {
            Fs.writeFile("./prensa-libre.mp3", data.AudioStream, function(err) {
                if (err) {
                    return console.log(err)
                }
                console.log("The file was saved!")
            })
        }
    }
})