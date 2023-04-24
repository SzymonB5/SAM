const express = require('express')

const app = express()

app.get('/', (req, res) => {

	let messageToSend  = '';
	
	if (req.query.imgFile) {
		messageToSend += `<img src=${req.query.imgFile} id = "posterImage">`;
		messageToSend += `<button type="button" id = "imgAdd">Add img</button>`;
	}
	
	if (req.query.videoFile) {
		messageToSend += `</br> <video id = "videoPlayer" src = ${req.query.videoFile}></video>`;
		messageToSend += `<button type="button" id = "videoCancel">cancel video</button>`;
		messageToSend += `<button type="button" id = "videoAdd">Add video</button>`;
		messageToSend += `<script>document.getElementById("videoCancel").addEventListener('click', () => document.getElementById("videoPlayer").src = "cancel.mp4")</script>`
	}
	
	if (req.query.audioFile) {
		messageToSend  += `<audio id = "audioPlayer" src = ${req.query.audioFile}></audio>`;
		messageToSend  += `<button type="button" id = "audioCancel">cancel audio</button>`;
		messageToSend  += `<button type="button" id = "audioAdd">Add audio</button>`;
		messageToSend  += `<script>document.getElementById("audioCancel").addEventListener('click', () => document.getElementById("audioPlayer").src = "cancel.mp3")</script>`

	}
	
	messageToSend += `<table id = 'playlist_table'> 
					  <tr>
    					<th>No.</th>
    					<th>URL</th>
    				  	<th>Type</th>
    				  	<th>Action</th>
  					  </tr>
					</table>`

	if (req.query.videoFile) {
		messageToSend += `<script>document.getElementById('videoAdd').addEventListener('click',
		() => {
    			let table = document.getElementById('playlist_table');
		        let row = table.insertRow(table.rows.length);
			let c1 = row.insertCell(0);
			let c2 = row.insertCell(1);
			let c3 = row.insertCell(2);
			c1.innerHTML = table.rows.length - 1
			c2.innerHTML = document.getElementById('videoPlayer').src
			c3.innerText = 'Video';
		})</script>`
	}
	
	if (req.query.audioFile) {
		messageToSend += `<script>document.getElementById("audioAdd").addEventListener('click',
		() => {
    			let table = document.getElementById('playlist_table');
        	        let row = table.insertRow(table.rows.length);
    			let c1 = row.insertCell(0);
			let c2 = row.insertCell(1);
	            	let c3 = row.insertCell(2);
        	    	c1.innerHTML = table.rows.length - 1;
        	    	c2.innerHTML = document.getElementById('audioPlayer').src;
        	    	c3.innerText = 'Audio';
		})</script>`
	}
	

	
            


    res.send(messageToSend);
})



app.get('/', (req, res) => {
	res.send("Hello World!");
})


app.listen(4080)
