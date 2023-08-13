// Run Sound
let runSound = new Audio("assets/audio/run.mp3");
runSound.loop=true;
//Jump Sound
let jumpSound = new Audio("assets/audio/jump.mp3");

function keyCheck(event){
    //Enter
if (event.which==13){
if(runWorkerId==0){
    runWorkerId = setInterval(run,100);
   runSound.play();
}
}

//Space
    if(event.which==32){
        if(jumpWorkerId==0){
            jumpWorkerId = setInterval(jump,100);
            jumpSound.play();
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
    boyId.src = "assets/img/Run (" + runImageNumber + ").png";
}

//Jump
let jumpImageNumber =1;
let jumpWorkerId = 0;
let boyMarginTop =365;

function jump(){
    jumpImageNumber ++;

    if(jumpImageNumber<=7){
        boyMarginTop = boyMarginTop -30;
        boyId.style.marginTop = boyMarginTop +"px";
    }
    if(jumpImageNumber>=8){
        boyMarginTop = boyMarginTop + 30;
        boyId.style.marginTop = boyMarginTop +"px";
    }
    if(jumpImageNumber==13){
        jumpImageNumber = 1;

    }
  boyId.src = "assets/img/jump ("+jumpImageNumber+").png"
}