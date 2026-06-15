async function greet(){
    let speed = Math.floor(Math.random()*10)+1;
    if(speed <= 5){
        throw "weak connection"; //koi bhi error throw krwa sakte hai 
    }else{
        console.log("request resolved");
    }
    return "hello";
}

greet().then((result)=>{
    console.log("Here is the result :", result);
}).catch((err)=>{
    console.log("request rejected");
    console.log("Here is the error :", err)
});


/// ye tha async use krne ka tarika an AWAIT kaise krenge vo

function randNum (){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function prints (){
    await randNum();
    await randNum();
    await randNum();
     randNum();

}

// prints();



// color change krne ka code banate hai 

let h2 = document.querySelector("h2");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            h2.style.color= color;
            resolve("COlor changed");
        }, delay);
    });
}

async function hit (){
    try{
        for(let i = 0; i<=5; i++){
            await changeColor("red",100);
            await changeColor("blue",100);
            await changeColor("green",100);
            await changeColor("yellow",100);
        };
    }catch(err){
        console.log(err);
    }
};

hit();