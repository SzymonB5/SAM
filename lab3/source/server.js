const express = require('express')

const app = express()

app.get('/', (req, res) => {

	let sentMessage = '';
	
	if (req.query.videoFile) {
		sentMessage += `</br> <video id = "videoPlayer" src = ${req.query.videoFile}></video>`;
		sentMessage += `<button type="button" id = "videoCancel">Click Me!</button>`;
		sentMessage += `<script>document.getElementById("videoCancel").addEventListener('click', () => document.getElementById("videoPlayer").src = "cancel.mp4")</script>`
	}
	
	if (req.query.audioFile) {
		sentMessage += `<audio id = "audioPlayer" src = ${req.query.audioFile}></audio>`;
		sentMessage += `<button type="button" id = "audioCancel">Click Me!</button>`;
		sentMessage += `<script>document.getElementById("audioCancel").addEventListener('click', () => document.getElementById("audioPlayer").src = "cancel.mp4")</script>`
	}
	
	if (req.query.imgFile) {
		sentMessage += `<img src=${req.query.imgFile} id = "posterImage">`;
	}



    res.send(sentMessage);
})


app.get('/', (req, res) => {
	res.send("Hello World!");
})


app.listen(4080)

