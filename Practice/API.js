let heading = document.querySelector("p");
let btn = document.querySelector(".hit");
let url ="https://catfact.ninja/fact";

btn.addEventListener("click",async function(){

   let res = await axios.get(url);
   heading.innerText = res.data.fact;
   
}); 