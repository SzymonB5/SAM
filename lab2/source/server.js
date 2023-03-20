const express = require('express')

const app = express()

app.get('/', (req, res) => {
    var toSend = "";
    
    
    if (req.query.videoPlayer) {
      toSend += `<video id=videoPlayer src=` + res.query.videoPlayer + `> </video>`
 
      toSend += `<button id="videoCancel" onclick="changeOnSrc("videoPlayer", "cancel.mp4")"> Cancel video </button>`

    }
    
    if (req.query.audioPlayer) {
      toSend += `<audio id=audioPlayer src=` + res.query.audioPlayer + `> </audio>`
 
      toSend += `<button id="audioCancel" onclick="changeOnSrc("audioPlayer", "cancel.mp3")"> Cancel audio </button>`

      
    }
    
    var tag = `<script>
      function changeOnSrc(id, onClickValue) {
        element = Document.getElementById(id);
        element.src = onClickValue; 
      }
    </script>`
    res.send(toSend + tag);
})

app.listen(4080)
