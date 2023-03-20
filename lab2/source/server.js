const express = require('express')

const app = express()

app.get('/', (req, res) => {
    var sentText = "";
    
    
    if(req.query.videoPlayer) {
      sentText += `<video id=videoPlayer src=` + res.query.videoPlayer + `> </video>`
 
      sentText += `<button id="videoCancel" onclick="changeOnSrc("videoPlayer", "cancel.mp4")"> Cancel video </button>`

    }
    
    if(req.query.audioPlayer) {
      sentText += `<audio id=audioPlayer src=` + res.query.audioPlayer + `> </audio>`
 
      sentText += `<button id="audioCancel" onclick="changeOnSrc("audioPlayer", "cancel.mp3")"> Cancel audio </button>`

      
    }
    
    if(req.query.imgFile) {
      sentText += `<img id="posterImage" src="` + res.query.imgFile+  `"></img>`
    }

    res.send(sentText);
})

app.listen(4080)
