status = "";




function setup() {
  canvas = createCanvas(440, 340);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
}

function start(){
  objectDetector = ml5.objectDetector("cocossd", modelLoaded);
      document.getElementById("status").innerHTML = "Status : Detecting Object";
}

function modelLoaded(){
  console.log("Model Loaded");
  status = true;
 
}

function draw(){
    image(video, 0, 0, 480, 380)
}