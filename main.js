    

function preload(){
    clown_nose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
classifier = ml5.imageClassifier('mobileNet', modelLoaded);
function modelLoaded(){
    console.log("Ayo yall! U to Jhonny! Model Loaded Yall!")
}

function draw(){
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(noseX, noseY, 30); 
}

 
function snapjhonnyrule(){
    save('AYOWASSUPMYDUDESITSJHONNTHEREANDIAMAWESOME!!!_Wizzy_snap!.png');
}

function gotPoses(results){
    if(results.length > 0){
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX = "+noseX);
        console.log("noseY = "+noseY);
    }
}

noseX=0;
noseY=0;