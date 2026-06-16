let heading1 = document.querySelector(".p1");
let btn1 = document.querySelector(".hit1");
let url1 = "https://catfact.ninja/fact";

btn1.addEventListener("click", async function () {
    try {
        let res = await axios.get(url1);
        heading1.innerText = res.data.fact;
    } catch (e) {
        console.log(e);
    }
});

//-----------------------------------------------------

let heading2 = document.querySelector(".p2");
let btn2 = document.querySelector(".hit2");
let url2 = "https://icanhazdadjoke.com/";

btn2.addEventListener("click", async function () {
    let header = { headers: { Accept: "application/json" } };
    try {
        let res = await axios.get(url2, header);
        heading2.innerText = res.data.joke;
    } catch (e) {
        console.log(e);
    }
});


//-----------------------------------------------------


let heading3 = document.querySelector(".p3");
let btn3 = document.querySelector(".hit3");
let url3 = "http://universities.hipolabs.com/search?country=";

//ye btn hit krega request using axios
btn3.addEventListener("click", function () {
    heading3.innerText="";
    let inp = document.querySelector(".inp").value;
    getCollege(inp);
    let inputss = document.querySelector(".inp");
    inputss.focus();

});


// ye logic bana raha hai ki kese random colleges ke names print honge or api call krra hai

async function getCollege(inp) {
    try {
        let res = await axios.get(url3 + inp);
        // let num = Math.floor(Math.random()*100)+1;
        // heading3.innerText = res.data[num].name;
        let id = setInterval(() => {
            newnum(res);
        }, 500);
        setTimeout(() => {
            clearInterval(id);
        }, 5000);
        
    } catch (err) {
        console.log(err);
    }
}


// yaha hum basically ek promise bana rahe hai jisme response milega fhir usko ek div bana kar us div ko append krenge html par 
function newnum(res) {
    return new Promise((resolve, reject) => {
        let div = document.createElement("div");
        div.classList.add("new");
        let num = Math.floor(Math.random() * 100) + 1;
        let names = res.data[num].name;
        let states = res.data[num]["state-province"];
        div.innerText = names+","+states;
        heading3.appendChild(div);
        resolve();
    });
}