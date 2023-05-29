const express = require('express')

const app = express()

app.get('/', (req, res) => {

    let messageToSend  = '';

    if (req.query.videoFile) {
        messageToSend += `<button type="button" id = "videoPlay">Play Video</button>`;
        messageToSend += `<button type="button" id = "videoPause">Pause Video</button>`;
    }

    if (req.query.audioFile) {
        messageToSend += `<button type="button" id = "audioPlay">Play Audio</button>`;
        messageToSend += `<button type="button" id = "audioPause">Pause Audio</button>`;
    }

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


    messageToSend += `
	<script>
	let addDeleteToDeleteButtons = () => {
        		const deleteButtons = document.querySelectorAll('.removeRowButton')
			deleteButtons.forEach( (button) => {
            
            			button.addEventListener('click', () => {
	              		const row = button.parentElement.parentElement;
        		        row.remove();
         		})
		})
	}
	</script>
	`

    messageToSend += `
	<script>
	let addMoveRowUpToUpButton = (button) => {
            const row = button.parentElement.parentElement;
            let prevRow = row.previousElementSibling;
            if (prevRow.rowIndex > 0) {
                row.parentNode.insertBefore(row, prevRow);
            }
            else {
                row.parentNode.appendChild(row);
            }
    }
	</script>
	`
    messageToSend += `
	<script>
		let insertAfter = (newNode, referenceNode) => {
			referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
		}
	</script>`

    messageToSend += `
	<script>
	let addMoveRowDownToDownButtons = () => {
        		const moveDownButtons = document.querySelectorAll('.moveRowDownButton')
				moveDownButtons.forEach( (button) => {
            
            button.addEventListener('click', () => {
                const row = button.parentElement.parentElement;
				let prevRow = row.nextElementSibling;
				let firstRow = document.querySelector('tr');
				if (prevRow.rowIndex < document.querySelectorAll('tr').length) {
					insertAfter(row, prevRow);
				}
				else if (firstRow) {    
					insertAfter(row, firstRow);
				}
            })
		})
	}
	</script>
	`

    if (req.query.videoFile) {
        messageToSend += `<script>document.getElementById('videoAdd').addEventListener('click',
		() => {
    			let table = document.getElementById('playlist_table');
		        let row = table.insertRow(table.rows.length);
			let c1 = row.insertCell(0);
			let c2 = row.insertCell(1);
			let c3 = row.insertCell(2);
			let c4 = row.insertCell(3);
			
			c1.innerHTML = table.rows.length - 1;
			c2.innerHTML = document.getElementById('videoPlayer').src;
			c3.innerText = 'Video';
			c4.innerHTML = '<button type="button" class="removeRowButton">Delete</button> <button type="button" class="moveRowUpButton" onclick="addMoveRowUpToUpButton(this)">Up</button> <button type="button" class="moveRowDownButton">Down</button>';
			addDeleteToDeleteButtons();
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
			let c4 = row.insertCell(3);
			
        	    	c1.innerHTML = table.rows.length - 1;
        	    	c2.innerHTML = document.getElementById('audioPlayer').src;
        	    	c3.innerText = 'Audio';  	
        	    	c4.innerHTML = '<button type="button" class="removeRowButton">Delete</button> <button type="button" class="moveRowUpButton" onclick="addMoveRowUpToUpButton(this)">Up</button> <button type="button" class="moveRowDownButton">Down</button>';

			        addDeleteToDeleteButtons();
		})</script>`
    }
    if (req.query.imgFile) {
        messageToSend += `<script>document.getElementById("imgAdd").addEventListener('click',
		() => {
    			let table = document.getElementById('playlist_table');
                	let row = table.insertRow(table.rows.length);
    			let c1 = row.insertCell(0);
			let c2 = row.insertCell(1);
	            	let c3 = row.insertCell(2);
        	        let c4 = row.insertCell(3);
        	        
        	    	c1.innerHTML = table.rows.length - 1;
        	    	c2.innerHTML = document.getElementById('posterImage').src;
        	    	c3.innerText = 'Image';
        	    	c4.innerHTML = '<button type="button" class="removeRowButton">Delete</button> <button type="button" class="moveRowUpButton" onclick="addMoveRowUpToUpButton(this)">Up</button> <button type="button" class="moveRowDownButton">Down</button>';
			        addDeleteToDeleteButtons();
		})</script>`
    }

    messageToSend += `
		<script>
		const deleteButtons = document.querySelectorAll('.removeRowButton')
		deleteButtons.forEach( (button) => {
            		button.addEventListener('click', () => {
		                const row = button.parentElement.parentElement;
                		row.remove();
	            })
		})
	
	</script>`

    if (req.query.audioFile) {
        messageToSend += `
            <script>document.getElementById("audioPlay").addEventListener('click',
            () => {
                let audio = document.getElementById("audioPlayer");
                if (audio.paused) {
                    audio.play();
                }              
		})</script>`
    }

    if (req.query.audioFile) {
        messageToSend += `
            <script>document.getElementById("audioPause").addEventListener('click',
            () => {
                let audio = document.getElementById("audioPlayer");
                if (audio.paused === false) {
                    audio.pause();
                }
		})</script>`
    }

    if (req.query.videoFile) {
        messageToSend += `
            <script>document.getElementById("videoPause").addEventListener('click',
            () => {
                let video = document.getElementById("videoPlayer");
                if (video.paused === false) {
                    video.pause();
                }
		})</script>`
    }

    if (req.query.videoFile) {
        messageToSend += `
            <script>document.getElementById("videoPlay").addEventListener('click',
            () => {
                let video = document.getElementById("videoPlayer");
                if (video.paused) {
                    video.play();
                }
		})</script>`
    }


    res.send(messageToSend);
})



app.get('/', (req, res) => {
    res.send("Hello World!");
})


app.listen(4080)
