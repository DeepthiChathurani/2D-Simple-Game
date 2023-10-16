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
            moveDragonWorkerId = setInterval(moveDragon,100);
        }

    }

    //Space
    if (event.which == 32) {

        if (jumpWorkerId == 0) {

            clearInterval(runWorkerId);
            clearInterval(slideWorkerId);
            runSound.pause();
            jumpWorkerId = setInterval(jump, 100);
            jumpSound.play();
        }
    }
    // down arrow
    if(event.which == 40){
        if (slideWorkerId == 0) {

            clearInterval(runWorkerId);
            clearInterval(jumpWorkerId);
            runSound.pause();
            slideWorkerId = setInterval(slide, 100);
            slideSound.play();
        }
    }
}


//run
var boyId = document.getElementById("boy4");
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
var boyMarginTop = 335;

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
        if (moveDragonWorkerId == 0) {
            moveDragonWorkerId = setInterval(moveDragon, 100);
        }
    }

    boyId.src = "assets/img/Jump (" + jumpImageNumber + ").png"
}

//slide
var slideWorkerId=0;
var slideImageNumber =0;

function slide() {
    slideImageNumber = slideImageNumber+1;
    if(slideImageNumber >=1 & slideImageNumber <=5){
        boyMarginTop = boyMarginTop +8;
        boyId.style.marginTop = boyMarginTop + "px";
    }
    if(slideImageNumber >=6 & slideImageNumber <10){
        boyMarginTop = boyMarginTop -8;
        boyId.style.marginTop = boyMarginTop + "px";
    }
    if(slideImageNumber==11){
        slideImageNumber =1;

        clearInterval(slideWorkerId);
        slideWorkerId=0;

        runWorkerId = setInterval(run,100);
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
        if (moveDragonWorkerId == 0) {
            moveDragonWorkerId = setInterval(moveDragon, 100);
        }
    }
    boyId.src ="assets/img/Slide (" + slideImageNumber + ").png";
}

// Move Background
var BackgroundId = document.getElementById("background4");
var backgroundX = 0;
var backgroundWorkerId = 0;

function moveBackground() {
    backgroundX = backgroundX - 20;
    BackgroundId.style.backgroundPositionX = backgroundX + "px";
}

//score

var scoreId = document.getElementById("score4");
var newScore = 0;
var scoreWorkerId = 0;

function updateScore() {
    newScore = newScore + 4;
    scoreId.innerHTML = newScore;
    if(newScore==800){
        levelCompleted();
    }
}

//block create

var blockMarginLeft =650;
function createBlock(){
    for(var i=0; i<= 100 ;i++){
        var block = document.createElement("div");
        block.className="block4";
        document.getElementById("background4").appendChild(block);
        block.style.marginLeft = blockMarginLeft +"px";
        block.id ="block4"+i;
        blockMarginLeft =blockMarginLeft +500;

    }
}
//block move

var moveBlockWorkerId = 0;
function moveBlock() {
    for (var i = 0; i < 100; i++) {
        var currentBlock = document.getElementById("block4" + i);
        var currentBlockMarginLeft = getComputedStyle(currentBlock).marginLeft;
        var newMarginLeft = parseInt(currentBlockMarginLeft) - 20;

        currentBlock.style.marginLeft = newMarginLeft + "px";
        //alert(newMarginLeft);
        //120,10

        if (newMarginLeft < 120 & newMarginLeft > 10) {
            // alert(boyMarginTop);
            // alert("Dead");
            // 305

            if (boyMarginTop > 325) {
                clearInterval(runWorkerId);
                runSound.pause();
                clearInterval(jumpWorkerId);
                jumpWorkerId = -1;
                clearInterval(scoreWorkerId);
                clearInterval(backgroundWorkerId);
                clearInterval(moveDragonWorkerId)
                clearInterval(moveBlockWorkerId);

                deadWorkerId = setInterval(dead, 100);
                deadSound.play();
            }
        }
    }
}
// dragon block create

var dragonMarginTop =290;
var dragonMarginLeft = 900;

function createDragon() {
    for (var i=0; i<100; i++){
        var dragonGif = document.createElement("div");
        dragonGif.className="dragon";
        document.getElementById("background4").appendChild(dragonGif);
        dragonGif.style.marginLeft = dragonMarginLeft +"px";
        dragonGif.style.marginTop = dragonMarginTop +"px";
        dragonGif.id ="dragon"+i;
        dragonMarginLeft =dragonMarginLeft +500;
    }
}
//move dragon
var moveDragonWorkerId = 0;

function moveDragon() {
    for (var i=0; i<100; i++){
        var newDragon = document.getElementById("dragon"+i);
        var currentDragonMarginLeft = getComputedStyle(newDragon).marginLeft;
        var newDragonMarginLeft = parseInt(currentDragonMarginLeft) - 20;

        newDragon.style.marginLeft = newDragonMarginLeft + "px";

        if (newDragonMarginLeft < 120 & newDragonMarginLeft >10) {


            if (boyMarginTop <= 350) {
                clearInterval(runWorkerId);
                runWorkerId =-1;
                runSound.pause();
                clearInterval(jumpWorkerId);
                jumpWorkerId = -1;
                jumpSound.pause()
                clearInterval(slideWorkerId);
                slideWorkerId=-1;
                slideSound.pause();
                clearInterval(scoreWorkerId);
                clearInterval(backgroundWorkerId);
                clearInterval(moveDragonWorkerId)
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
    clearInterval(moveDragonWorkerId);
    moveDragonWorkerId=-1;

    document.getElementById("won").style.visibility = "visible";
    // document.getElementById("currentScore").style.visibility = "visible";
    // document.getElementById("currentScore").innerHTML = newScore;
    levelup.play();

}
