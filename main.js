var x = 0;
var y = 0;

function preload() {
    nose = loadImage('mustache.png');
}

function setup() {
    c = createCanvas(380, 300);
    c.position(495, 200);
    webcam = createCapture(VIDEO);
    webcam.hide();
    posenet = ml5.poseNet(webcam, modelLoaded);
    posenet.on('pose', gotResults)
}

function draw() {
    image(webcam, 0, 0, 380, 300);
    image(nose, x - 175, y - 130, 75, 40);
}

function modelLoaded() {
    console.log("Posenet loaded");
}

function gotResults(results) {
    if (results.length > 0) {
        console.log(results);
        x = results[0].pose.nose.x;
        y = results[0].pose.nose.y;
        console.log(x + "   " + y);
    }
}
function saveimg() {
    save('myphoto.png');
}