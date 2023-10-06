//Run sound
var  runSound = new Audio("assets/audio/run.mp3");
runSound.loop = true;

//jump sound
var jumpSound = new Audio("assets/audio/jump.mp3");

//dead sound
var deadSound = new Audio("assets/audio/dead.mp3");

//level up sound
var levelup =new Audio("assets/audio/levelup.mp3");

//slide sound
var slideSound =new Audio("assets/audio/slide.mp3");

function keyCheck(event) {
    //Enter
    if (event.which == 13) {

        if (runWorkerId == 0) {

            runWorkerId = setInterval(run, 100);
            runSound.play();

            backgroundWorkerId = setInterval(moveBackground, 100);
            scoreWorkerId = setInterval(updateScore, 100);

            moveBlockWorkerId = setInterval(moveBlock, 100);
        }

    }

    //Space
    if (event.which == 32) {

        if (jumpWorkerId == 0) {

            clearInterval(runWorkerId);
            runSound.pause();
            jumpWorkerId = setInterval(jump, 100);
            jumpSound.play();
        }
    }
}
//run
var boyId = document.getElementById("boy");
var runImageNumber = 1;
var runWorkerId = 0;

function run() {
    runImageNumber++;

    if (runImageNumber == 9) {
        runImageNumber = 1;
    }
    boyId.src = "assets/img/Run (" + runImageNumber + ").png";
}

//jump
var jumpImageNumber = 1;
var jumpWorkerId = 0;
var boyMarginTop = 355;

function jump() {
    jumpImageNumber++;

    if (jumpImageNumber <= 7) {
        boyMarginTop = boyMarginTop - 30;
        boyId.style.marginTop = boyMarginTop + "px";
    }
    if (jumpImageNumber >= 8) {
        boyMarginTop = boyMarginTop + 30;
        boyId.style.marginTop = boyMarginTop + "px";
    }

    if (jumpImageNumber == 13) {
        jumpImageNumber = 1;

        clearInterval(jumpWorkerId);
        jumpWorkerId = 0;

        runWorkerId = setInterval(run, 100);
        runSound.play();

        if (backgroundWorkerId == 0) {
            backgroundWorkerId = setInterval(moveBackground, 100);
        }
        if (scoreWorkerId == 0) {
            scoreWorkerId = setInterval(updateScore, 100);
        }
        if (moveBlockWorkerId == 0) {
            moveBlockWorkerId = setInterval(moveBlock, 100);
        }
    }

    boyId.src = "assets/img/Jump (" + jumpImageNumber + ").png"
}
// Move Background
var BackgroundId = document.getElementById("background3");
var backgroundX = 0;
var backgroundWorkerId = 0;

function moveBackground() {
    backgroundX = backgroundX - 20;
    BackgroundId.style.backgroundPositionX = backgroundX + "px";
}
//score
var scoreId = document.getElementById("score");
var newScore = 0;
var scoreWorkerId = 0;

function updateScore() {
    newScore = newScore + 3;
    scoreId.innerHTML = newScore;
    if(newScore==700){
        levelCompleted();
    }

}
var blockMarginLeft =650;

function createBlock(){
    for(var i=0; i<= 100 ;i++){
        var block = document.createElement("div");
        block.className="block3";
        document.getElementById("background3").appendChild(block);
        block.style.marginLeft = blockMarginLeft +"px";
        block.id ="block3"+i;

        //   var gap = Math.random() * (1000 - 400) + 400;
        if(i<=10){
            blockMarginLeft =blockMarginLeft +350;
        }
        if(i>=11){
            blockMarginLeft =blockMarginLeft +270;
        }
    }
}
//block move

var moveBlockWorkerId = 0;
function moveBlock() {
    for (var i = 0; i < 100; i++) {
        var currentBlock = document.getElementById("block3" + i);
        var currentBlockMarginLeft = getComputedStyle(currentBlock).marginLeft;
        var newMarginLeft = parseInt(currentBlockMarginLeft) - 20;

        currentBlock.style.marginLeft = newMarginLeft + "px";
        //alert(newMarginLeft);
        //120,10

        if (newMarginLeft < 120 & newMarginLeft > 10) {
            // alert(boyMarginTop);
            // alert("Dead");
            // 305

            if (boyMarginTop > 305) {
                clearInterval(runWorkerId);
                runSound.pause();
                clearInterval(jumpWorkerId);
                jumpWorkerId = -1;
                clearInterval(scoreWorkerId);
                clearInterval(backgroundWorkerId);
                clearInterval(moveBlockWorkerId);

                deadWorkerId = setInterval(dead, 100);
                deadSound.play();
            }
        }
    }
}
//Dead
var deadImageNumber = 1;
var deadWorkerId = 0;

function dead() {
    deadImageNumber++;

    if (deadImageNumber == 11) {
        deadImageNumber = 10;
        boyId.style.marginTop = "365px";
        document.getElementById("endScreen").style.visibility = "visible";
        document.getElementById("endScore").innerHTML = newScore;
    }
    boyId.src = "assets/img/Dead (" + deadImageNumber + ").png";
}

//page relord

function reload() {
    location.reload();
}
//start level completed
function levelCompleted(){
    clearInterval(runWorkerId);
    runWorkerId =-1;
    runSound.pause();
    clearInterval(jumpWorkerId);
    jumpWorkerId = -1;
    jumpSound.pause();
    clearInterval(scoreWorkerId);
    scoreWorkerId =-1;
    clearInterval(backgroundWorkerId);
    backgroundWorkerId =-1;
    clearInterval(moveBlockWorkerId);
    moveBlockWorkerId=-1;

    document.getElementById("nextLevel1").style.visibility = "visible";
    document.getElementById("currentScore").style.visibility = "visible";
    document.getElementById("currentScore").innerHTML = newScore;
    levelup.play();

}
