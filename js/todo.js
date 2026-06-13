let todo = document.querySelector("#todo");
let btns = document.querySelector(".enter");
let ul = document.querySelector("ul");

//sara html se data le liya

btns.addEventListener("click",function (){
    let item = document.createElement("li");
    item.innerText=todo.value;  

    //btn dabane se new list banegi jo ki todo hogi
    
    
    let dell = document.createElement("button");
    dell.innerText="delete";                            
    dell.classList.add("delete");
    
    item.appendChild(dell);
    ul.appendChild(item);
})

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
    event.target.parentElement.remove();        
    }
})