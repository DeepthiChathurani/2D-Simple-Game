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
var boyMarginTop = 365;

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
