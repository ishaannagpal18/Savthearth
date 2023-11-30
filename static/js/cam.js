console.log(screen.availWidth, screen.availHeight);

		var wr = screen.availWidth/1316;
		var hr = screen.availHeight/741;
		console.log(wr, hr);
	// console.log(screen.innerWidth, screen.innerHeight);
	// console.log(wr, hr);

	var video = document.getElementById('video-stream');
	var canvas = document.getElementById('mega-canvas');
	var ctx = canvas.getContext('2d');

window.onload = function AccessWebCam(){
  video.style.display = "block";

  if(navigator.mediaDevices.getUserMedia){

    let constraints = {
      // video: true,
      video: {
        width: 1200,
        height: 552,
      }
    };

    let VideoProm = navigator.mediaDevices.getUserMedia(constraints);

      VideoProm.then(function (stream) {
        Stream(stream);
      })
      .catch(function (err0r) {
        console.log("Something went wrong!");
        window.history.go(-1);
      });
  }
}

//Stream on success
function Stream(stream){
  video.srcObject = stream;
}

function detectWebcam(callback) {
  let md = navigator.mediaDevices;
  if (!md || !md.enumerateDevices) return callback(false);
  md.enumerateDevices().then(devices => {
    callback(devices.some(device => 'videoinput' === device.kind));
  })
}

detectWebcam(function(hasWebcam) {
  console.log('Webcam: ' + (hasWebcam ? 'yes' : 'no'));
})
