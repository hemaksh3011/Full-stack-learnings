// =====================================================
// 1. GLOBAL VARIABLES
// =====================================================

let gameSeq = [];       // game ka sequence
let userSeq = [];       // user ka sequence
let colors = ["red","green","blue","yellow"];

let started = false;
let level = 0;

let title = document.querySelector(".title");
let text = document.querySelector(".text");


// =====================================================
// 2. GAME START EVENT
// =====================================================

document.addEventListener("keypress", function () {
    if (!started) {
        started = true;
        levelup();
    }
});


// =====================================================
// 3. LEVEL UP FUNCTION (GAME LOGIC)
// =====================================================

function levelup() {
    userSeq = [];
    level++;
    text.innerText = `Level ${level}`;

    let randomIndex = Math.floor(Math.random() * 4);
    let randomColor = colors[randomIndex];
    let randomBox = document.querySelector(`.${randomColor}`);

    btnFlash(randomBox);
    gameSeq.push(randomColor);

    console.log("Game sequence:", gameSeq);
}


// =====================================================
// 4. FLASH ANIMATION FUNCTIONS
// =====================================================

function btnFlash(box) {
    box.classList.add("flash");
    setTimeout(() => {
        box.classList.remove("flash");
    }, 150);
}

function uFlash(box) {
    box.classList.add("uflash");
    setTimeout(() => {
        box.classList.remove("uflash");
    }, 150);
}


// =====================================================
// 5. USER CLICK EVENT LISTENERS
// =====================================================

let boxes = document.querySelectorAll(".boxes");

for (let box of boxes) {
    box.addEventListener("click", boxPress);
}


// =====================================================
// 6. USER PRESS FUNCTION
// =====================================================

function boxPress() {
    uFlash(this);

    let userColor = this.getAttribute("id");
    userSeq.push(userColor);

    console.log("User sequence:", userSeq);

    checkcolor(userSeq.length);
}


// =====================================================
// 7. CHECK USER SEQUENCE
// =====================================================

function checkcolor(inx) {

    // current index (inx-1)
    if (gameSeq[inx - 1] === userSeq[inx - 1]) {

        // if sequence match completely
        if (gameSeq.length === userSeq.length) {
            setTimeout(levelup, 1000);
        }

    } else {
        text.innerText = "Game Over! Press any key to restart";
        reset();
    }
}


// =====================================================
// 8. RESET GAME
// =====================================================

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
