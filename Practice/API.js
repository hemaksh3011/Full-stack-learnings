let heading = document.querySelector("p");
let btn = document.querySelector(".hit");
let url ="https://catfact.ninja/fact";

btn.addEventListener("click",function(){

    fetch(url)
    .then((res)=>{
        // console.log("Done bhai :",res);
        res.json().then((data)=>{
            heading.innerText = data.fact
        })
    })
    .catch((err)=>{
        console.log("Gadbad hai baba :",err);
    });
});