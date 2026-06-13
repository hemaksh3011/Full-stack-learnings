let div = document.querySelector(".container");
let ul = document.querySelector(".outer-ul");


let li1 = document.querySelector(".inner1");
let li2 = document.querySelector(".inner2");
let li3 = document.querySelector(".inner3");
let li4 = document.querySelector(".inner4");

li1.addEventListener("click", function(){
    li1.style.backgroundColor="red";
    console.log("red wala chala");
});
li2.addEventListener("click", function(){
    li2.style.backgroundColor="yellow";
    console.log("rellow wala chala");
});
li3.addEventListener("click", function(){
    li3.style.backgroundColor="blue";
    console.log("blue wala chala");
});
li4.addEventListener("click", function(){
    li4.style.backgroundColor="grey";
    console.log("grey wala chala");
});


let lis = document.querySelectorAll(".inner");

div.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("div clisked");
});

ul.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("ul clickes");
});

for(li of lis){
    li.addEventListener("click",function(event){
        event.stopPropagation();
        console.log("li clicked");
    });
};


//KEHNE KA MATLAB KABHI CHILD KO CLICK KROGE TO BAAP BHI BOLEGA OR DADA BHI BOLEGA TO ISILIYE stopPropogation SE JISKO TOUCH KROGE WAHI BOLEGA.....