const express = require('express')

const app = express()

app.get('/', (req, res) => {

	let messageToSend = '';
	
	if (req.query.videoFile) {
		messageToSend += `</br> <video id = "videoPlayer" src = ${req.query.videoFile}></video>`;
		messageToSend += `<button type="button" id = "videoCancel">Click Me!</button>`;
		messageToSend += `<script>document.getElementById("videoCancel").addEventListener('click', () => document.getElementById("videoPlayer").src = "cancel.mp4")</script>`
	}
	
	if (req.query.audioFile) {
		messageToSend += `<audio id = "audioPlayer" src = ${req.query.audioFile}></audio>`;
		messageToSend += `<button type="button" id = "audioCancel">Click Me!</button>`;
		messageToSend += `<script>document.getElementById("audioCancel").addEventListener('click', () => document.getElementById("audioPlayer").src = "cancel.mp4")</script>`
	}
	
	if (req.query.imgFile) {
		messageToSend += `<img src=${req.query.imgFile} id = "posterImage">`;
	}
	
	messageToSend += `<table id = 'playlist_table'> 
					  <tr> <th>No.</th>
    					<th>URL</th>
    				  	<th>Type</th> </tr>`
	


    res.send(messageToSend);
})


app.get('/', (req, res) => {
	res.send("Hello World!");
})


app.listen(4080)

