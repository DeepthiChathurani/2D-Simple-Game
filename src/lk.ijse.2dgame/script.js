// // Run Sound
// let runSound = new Audio("assets/audio/run.mp3");
// runSound.loop=true;
// //Jump Sound
// let jumpSound = new Audio("assets/audio/jump.mp3");
//
// function keyCheck(event){
//     //Enter
// if (event.which==13){
// if(runWorkerId==0){
//     runWorkerId = setInterval(run,100);
//    runSound.play();
//    backgroundWorkerId = setInterval(moveBackground,100);
//    scoreWorkerId = setInterval(updateScore,100);
//    blockWorkerId = setInterval(createBlock,100);
//     moveBlockWorkerId = setInterval(moveBlock, 100);
//
// }
// }
//
// //Space
//     if(event.which==32){
//         if(jumpWorkerId==0){
//             clearInterval(runWorkerId);
//             runSound.pause();
//             jumpWorkerId = setInterval(jump,100);
//             jumpSound.play();
//         }
//
//     }
// }
// //Run
// let boyId = document.getElementById("boy");
// let runImageNumber = 1;
// let runWorkerId = 0;
//
// function run() {
//     runImageNumber++;
//
//     if (runImageNumber == 9) {
//         runImageNumber = 1;
//     }
//     boyId.src = "assets/img/Run (" + runImageNumber + ").png";
// }
//
// //Jump
// let jumpImageNumber =1;
// let jumpWorkerId = 0;
// let boyMarginTop =365;
//
// function jump(){
//     jumpImageNumber ++;
//
//     if(jumpImageNumber<=7){
//         boyMarginTop = boyMarginTop -30;
//         boyId.style.marginTop = boyMarginTop +"px";
//     }
//     if(jumpImageNumber>=8){
//         boyMarginTop = boyMarginTop + 30;
//         boyId.style.marginTop = boyMarginTop +"px";
//     }
//     if(jumpImageNumber==13){
//         jumpImageNumber = 1;
//
//         clearInterval(jumpWorkerId);
//         jumpWorkerId=0;
//
//         runWorkerId = setInterval(run,100);
//         runSound.play();
//
//         if (backgroundWorkerId == 0) {
//             backgroundWorkerId = setInterval(moveBackground, 100);
//         }
//         if(scoreWorkerId==0){
//             scoreWorkerId = setInterval(updateScore,100);
//         }
//         if (blockWorkerId==0){
//             blockWorkerId = setInterval(createBlock,100);
//         }
//         if(moveBlockWorkerId==0){
//             moveBlockWorkerId = setInterval(moveBlock,100);
//         }
//     }
//
//   boyId.src = "assets/img/jump ("+jumpImageNumber+").png"
// }
//
// // Move Background
// let BackgroundId = document.getElementById("background");
// let backgroundX = 0;
// let backgroundWorkerId = 0;
//
// function moveBackground() {
//     backgroundX = backgroundX - 20;
//     BackgroundId.style.backgroundPositionX = backgroundX + "px";
// }
//
// //Score
// let scoreId = document.getElementById("score");
// let newScore = 0;
// let scoreWorkerId =0;
//
// function updateScore() {
//     newScore ++;
//     scoreId.innerHTML = newScore;
//
// }
//
// //create block
// var blockMarginLeft = 600;
// var blockWorkerId = 0;
// var blockId = 1;
//
// function createBlock() {
//     // var block = document.createElement("div");
//     // block.className = "block";
//     // block.id = "block" + blockId;
//      document.getElementById("block"+blockId);
//      blockId++;
//
//     let gap = Math.random() * (1000 - 400) + 400;
//     document.getElementById("block"+500+"px");
//     // blockMarginLeft = blockMarginLeft + 500;
//     // block.style.marginLeft = blockMarginLeft + "px";
//
//    // document.getElementById("background").appendChild(block);
// }
//
//
// //Move Block
//
// let moveBlockWorkerId = 0;
//
// function moveBlock() {
//     for (let i = 1; i <= blockId; i++) {
//         let currentBlock = document.getElementById("block" + [i]);
//         let currentBlockMarginLeft = currentBlock.style.marginLeft;
//         let newMarginLeft = parseInt(currentBlockMarginLeft) - 20;
//
//         currentBlock.style.marginLeft = newMarginLeft + "px";
//         //alert(newMarginLeft);
//         //120,10
//
//         if (newMarginLeft < 120 & newMarginLeft > 10) {
//             // alert(boyMarginTop);
//             // alert("Dead");
//             // 305
//
//             if (boyMarginTop > 305) {
//                 clearInterval(runWorkerId);
//                 runSound.pause();
//                 clearInterval(jumpWorkerId);
//                 jumpWorkerId = -1;
//                 clearInterval(scoreWorkerId);
//                 clearInterval(backgroundWorkerId);
//                 clearInterval(blockWorkerId);
//                 clearInterval(moveBlockWorkerId);
//
//                // deadWorkerId = setInterval(dead, 100);
//
//             }
//         }
//     }
// }
// run sound
var  runSound = new Audio("assets/audio/run.mp3");
runSound.loop = true;

//jump sound
var jumpSound = new Audio("assets/audio/jump.mp3");

//dead sound
var deadSound = new Audio("assets/audio/dead.mp3");

function keyCheck(event) {
    //Enter
    if (event.which == 13) {

        if (runWorkerId == 0) {

            runWorkerId = setInterval(run, 100);
            runSound.play();

            backgroundWorkerId = setInterval(moveBackground, 100);
            scoreWorkerId = setInterval(updateScore, 100);
            blockWorkerId = setInterval(createBlock, 100);
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
        if (blockWorkerId == 0) {
            blockWorkerId = setInterval(createBlock, 100);
        }
        if (moveBlockWorkerId == 0) {
            moveBlockWorkerId = setInterval(moveBlock, 100);
        }
    }

    boyId.src = "assets/img/Jump (" + jumpImageNumber + ").png"
}

// Move Background
var BackgroundId = document.getElementById("background");
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
    newScore++;
    scoreId.innerHTML = newScore;

}

//create block
var blockMarginLeft = 250;
var blockWorkerId = 0;
var blockId = 1;
var block = document.createElement("div");
function createBlock() {
    block.className = "block";
    block.id = "block" + blockId;

    blockId++;

    var gap = Math.random() * (1000 - 400) + 400;

    blockMarginLeft = blockMarginLeft + 500;
    block.style.marginLeft = blockMarginLeft + "px";

    document.getElementById("background").appendChild(block);
}

//block move
var moveBlockWorkerId = 0;
function moveBlock() {
    for (var i = 1; i <= blockId; i++) {
        var currentBlock = document.getElementById("block" + [i]);
        var currentBlockMarginLeft = currentBlock+block.style.marginLeft;
        var newMarginLeft = parseInt(currentBlockMarginLeft) - 20;

        currentBlockMarginLeft = newMarginLeft + "px";
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
                clearInterval(blockWorkerId);
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
        deadImageNumber =10;
        boyId.style.marginTop ="365px";
        document.getElementById("endScreen").style.visibility = "visible";
        document.getElementById("endScore").innerHTML = newScore;
    }
    boyId.src = "assets/img/Dead ("+ deadImageNumber +").png";
}

//page relord

function reload(){
    location.reload();
}