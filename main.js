imag = "";
status="";
object=[];
function preload(){
        

}

function setup(){
    canvas = createCanvas(480,380); 
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    

}



function draw(){
    image(video,0,0,480,380);
    if(status != ""){ 
        objectDetector.detect(video,gotResult);
         for(i=0; i<object.length; i++){
             fill("#ff0000");
             percent=floor(object[i].confidence*100);
             text(object[i].label+" "+percent+"%",object[i].x,object[i].y);
             noFill();
             stroke("#ff0000");
             rect(object[i].x,object[i].y,object[i].width,object[i].height);
 
         }
     }
} 

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("g").innerHTML="Status : Undetected";
}

function modelLoaded(){
    video.loop();
    video.volume(0);
    video.speed(1);
    console.log('yay');
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}