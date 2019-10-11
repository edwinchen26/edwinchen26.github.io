var options = {
    video: {
        facingMode: "user"
    },
    audio: false
};
var track = null;

// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraSensor = document.querySelector("#camera--sensor");

function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(options)
        .then(function (stream) {
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        })
        .catch(function (error) {
            console.error("Oops. Something is broken.", error);
        });
}

window.addEventListener("load", cameraStart, false);