let buttons = document.querySelectorAll("button");

// normal event banane ka tarika but yaha sirf ek hi event triger hoga 
// for(btn of buttons){
//     btn.onclick= hello;
//     btn.onmouseenter =  console.log("hover");
// }


// for(btn of buttons){
//     btn.addEventListener("click",hello);
//     btn.addEventListener("click",name);
// }


function hello() {
    alert("hello");
}
function name() {
    alert("name");
}


let generateBtn = document.querySelector(".generate");

generateBtn.addEventListener("click",function () {
    let h3 = document.querySelector("h3");
    let randColor = randomColor();
    h3.innerText=randColor;


    let div = document.querySelector(".box");
    div.style.backgroundColor = randColor;
    console.log(`color updated to ${randColor}`);
    }
);

function randomColor() {
    let red = Math.floor(Math.random()* 255);
    let green = Math.floor(Math.random()* 255);
    let blue = Math.floor(Math.random()* 255);
    let alpha = Math.random().toFixed(1);

    let color = `rgba(${red},${green},${blue},${alpha})`;   
    return color;
}



// jis bhi element ko click kroge event listener hit hoga

let h3 = document.querySelector("h3");
let generateBtns = document.querySelector(".generate");

h3.addEventListener("click",colors);
generateBtns.addEventListener("click",colors);

function colors(){
    this.style.backgroundColor= "black";
}