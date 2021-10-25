console.log("''''");
let container = document.getElementsByClassName('container');
let dragon = document.getElementById("dragon");
let tree = document.getElementById("tree");
let cloud = document.getElementById("cloud");
let gameOver = document.getElementById("gameOver");
let start = document.getElementById("start");
let jump = document.getElementById("jump");
let scoreBox = document.getElementById("scoreBox");


let interval = null;
let playerScore = 0;

let scoreCounter = function () {
    playerScore++;
    scoreBox.innerHTML = `Score : ${playerScore}`;
}

window.addEventListener("keydown", function startGame(e) {
    if (e.key == "Enter") {
        gameOver.style.display = "none";
        tree.classList.add("treeMove");
        cloud.firstElementChild.style.animation = "animateCloud 7s linear infinite";

        playerScore = 0;
        interval = setInterval(scoreCounter, 200);
    }
});

window.addEventListener("keydown", function run(e) {
    if (e.key == "ArrowUp") {
        dragon.classList.add("dragonMove")

        setTimeout(() => {
            dragon.classList.remove("dragonMove");
        }, 500);
    }
});

start.addEventListener("click", function () {
    gameOver.style.display = "none";
    tree.classList.add("treeMove");
    cloud.firstElementChild.style.animation = "animateCloud 7s linear infinite";

    playerScore = 0;
    interval = setInterval(scoreCounter, 200);
});

jump.addEventListener("click", function () {
    dragon.classList.add("dragonMove")

    setTimeout(() => {
        dragon.classList.remove("dragonMove");
    }, 500);
});


let result = setInterval(() => {
    let dragonBottom = parseInt(getComputedStyle(dragon).getPropertyValue("bottom"));
    let treeLeft = parseInt(getComputedStyle(tree).getPropertyValue("left"));

    if (dragonBottom <= 50 && treeLeft >= 0 && treeLeft <= 60) {

        gameOver.style.display = "block";
        tree.classList.remove("treeMove");
        cloud.firstElementChild.style.animation = "none";
        
        playerScore = 0;
        clearInterval(interval);
    }
}, 10);
