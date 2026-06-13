let div = document.querySelector(".container");
let btn = document.querySelector(".add");
let ul = document.querySelector(".todo");
let inp = document.querySelector(".task");
let right = document.querySelector(".right");
let rmall = document.querySelector(".delete");

function creation(event){
    if(event.key === "Enter"){
        console.log("submitted");    

        let li = document.createElement("li");
        // console.log(inp.value);
        li.innerText = inp.value;
    
        let delbtn = document.createElement("button");
        delbtn.innerText="completed";
        delbtn.classList.add("delete");

        li.appendChild(delbtn);
        ul.appendChild(li); 
        inp.value="";        
      
        delbtn.addEventListener("click",function(){
            let ul2 = document.querySelector(".completed-tasks");

            let li2 = document.createElement("li");
            li2.classList.add("completed-list");
            li2.innerText =li.firstChild.textContent;
  
            li.remove();
            ul2.appendChild(li2);
            right.appendChild(ul2);
            
            inp.value="";        


            rmall.addEventListener("click",function(){
                li2.remove();
            })


        });
    }
};

inp.addEventListener("keypress",creation);
btn.addEventListener("keypress",creation);

