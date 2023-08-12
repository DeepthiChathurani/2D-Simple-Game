// Run Sound
let runSound = new Audio("run.mp3");
runSound.loop=true;

function keyCheck(event){
    //Enter
if (event.which==13){
if(runWorkerId==0){
    runWorkerId = setInterval(run,100);
   // runSound.play();
}
}
}
//Run
let boyId = document.getElementById("boy");
let runImageNumber = 1;
let runWorkerId = 0;

function run() {
    runImageNumber++;

    if (runImageNumber == 9) {
        runImageNumber = 1;
    }
    boyId.src = "Run(" + runImageNumber + ").png"
}