let inp = document.querySelector("#texting");
// let btn = document.querySelector(".enter");
let para = document.querySelector(".print");

inp.addEventListener("input",function () {
    console.log("triggered");
    para.innerText=inp.value;

})