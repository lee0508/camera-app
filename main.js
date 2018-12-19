
// Gloval Vars
let width = 500,
    height = 0,
    filter = 'none',
    streaming = false;

// DOM Eements    
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const photos = document.getElementById('photos');

const photoButton = document.getElementById('photo-button');
const clearButton = document.getElementById('clear-button');
const photoFilter = document.getElementById('photo-filter');

const mediaConfig = { video: true };
const errBack = function(e) {
	console.log('An Error has occurred!', e)
};
// Get media stream
// navigator.mediaDevices.getUserMedia({video: true, audio: false})
   // .then(function(stream){
     
     // video.srcObject = stream;
     // video.play();
   // })
   // .catch(function(err) {
       // console.log(`Error: ${err}`);
   // });
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}
/* Legacy code below!*/
else if(navigator.getUserMedia) { // Standard
    navigator.getUserMedia(mediaConfig, function(stream) {
		video.src = stream;
		video.play();
	}, errBack);
} else if(navigator.webkitGetUserMedia) { //Webkit-prefixed
	navigator.webkitGetUserMedia(mediaConfig, function(stream) {
		video.src = window.webkitURL.createObjectURL(stream);
		video.play();
	}, errBack);
} else if(navigate.mozGetUserMedia) { // Mozilla-prefixed
	navigate.mozGetUserMedia(mediaConfig, function(stream) {
		video.src = window.URL.createObjectURL(stream);
		video.play();
	}, errBack);
}
	
// Play when ready
video.addEventListener('canplay', function(e) {
	if(!streaming) {
		// Set video / canvas height
		height = video.videoHeight / (video.videoWidth / width);

		video.setAttribute('width', width);
		video.setAttribute('height', height); 
		canvas.setAttribute('width', width);
		canvas.setAttribute('height', height);

		streaming = true;
	}
}, false);

// Photo button event
photoButton.addEventListener('click', function(e) {
	takePicture();

	e.preventDefault();
}, false);

// Filter event
photoFilter.addEventListener('change', function(e) {
	// Set filter to chosen option
	filter = e.target.value;
	// Set filter to video
	video.style.filter = filter;

	e.preventDefault();
});

// Clear event
clearButton.addEventListener('click', function(e) {
	// Clear photos;
	photos.innerHTML = '';
	// Change filter back to none
	filter = 'none';
	video.style.filter = filter;
	photoFilter.selectedIndex = 0;
});
function takePicture() {
	// Create canvas
	const context = canvas.getContext('2d');
	if(width && height) {
		// set canvas props
		canvas.width = width;
		canvas.height = height;
		// Draw an image of the video on th canvas
		context.drawImage(video, 0, 0, width, height);

		// Create image from the canvas
		const imgUrl = canvas.toDataURL('image/png');

		// Create img element
		const img = document.createElement('img');

		// Set img src
		img.setAttribute('src', imgUrl);

		img.style.filter = filter;

		// Add image to photos
		photos.appendChild(img);
	}
}