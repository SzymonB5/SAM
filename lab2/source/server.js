const express = require('express')

const app = express()

app.get('/', (req, res) => {
    var sentText = "";
    
    
    if(req.query.videoPlayer) {
      sentText += `<video id=videoPlayer src=` + res.query.videoPlayer + `> </video>`
    }
    
    if(req.query.audioPlayer) {
      sentText += `<audio id=audioPlayer src=` + res.query.audioPlayer + `> </audio>`
    }

    res.send(sentText);
})

app.listen(4080)
