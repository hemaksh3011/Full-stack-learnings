let heading = document.querySelector("h1");

// heading.style.color="blue";

function changeColor(color, delay, nextColor) {
    setTimeout(() => {
        heading.style.color = color;
        nextColor();
    },delay)
}


//callback hell hota hai ye jaha callback pr callback laga hota hai for complex nesting

changeColor("red", 1000, ()=>{
    changeColor("blue", 1000,()=>{
        changeColor("grey",1000);
    });
 });