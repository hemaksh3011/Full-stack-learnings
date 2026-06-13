let gameSeq=[];
let userSeq=[];

let container = document.querySelector(".container");

let colors = ["red","blue","green","yellow"];
let btn = document.querySelectorAll(".boxes");

let gameStatus = false;
let level = 1;
let levelStatus = document.querySelector(".level");

document.addEventListener("keypress", function () {
    if (!gameStatus) {
        levelup();
    }
});

function flash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 300)
};

function clicking(btn){
    btn.classList.add("clicking");
    setTimeout(() => {
        btn.classList.remove("clicking");
    }, 200);
};

function levelup(){
    gameStatus = true;
    levelStatus.innerText = `Level ${level++}`;

    let randindex = Math.floor(Math.random() * 4);
    let boxcolor = colors[randindex];
    let btn = document.querySelector(`.${boxcolor}`);

    gameSeq.push(btn.getAttribute("id"));
    console.log(gameSeq);

    console.log(randindex);
    console.log(`.${boxcolor}`);

    flash(btn);
}

function checkAns() {
    let currindex = userSeq.length - 1;

    if (userSeq[currindex] === gameSeq[currindex]) {

        if (userSeq.length === gameSeq.length) {
            setTimeout(() => {
                userSeq = [];
                levelup();
            }, 500);
        }

    } else {
        console.log("galat daba diya");
        container.classList.add("false");
        setTimeout(() => {
            container.classList.remove("false");
        }, 100);
        let display = document.querySelector(".display");
        display.innerText = `Game over !! Highest score was ${level-1}`
        userSeq=[];
        gameSeq=[];
        gameStatus=false;
        level=1;
        levelup();
    }
}


for (anybtn of btn){
    anybtn.addEventListener("click",function(){
        console.log(this);
        clicking(this);

        userSeq.push(this.getAttribute("id"));
        console.log(userSeq);

        checkAns(userSeq);
    });
};

