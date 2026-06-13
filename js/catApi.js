let btn = document.querySelector(".generate");

btn.addEventListener("click", async ()=>{
    let fact = await getFact();
    console.log(fact);
    let para = document.querySelector(".facts");
    para.innerText = fact;
});

let url = "https://catfact.ninja/fact";
async function getFact() {
    try{
    let result = await axios.get(url);
    return result.data.fact;
    } catch (e){
        console.log("error",e);
        return "nothing here";
    }
}

//------------------------------------------------------------------------------------------


let btn2 = document.querySelector(".find");

btn2.addEventListener("click",async ()=>{
    let breed = await getRandomBreed();
    console.log(breed);
   
    let para2 = document.querySelector(".breed");
    para2.innerText = `breed name is '${breed.breed}' from '${breed.country}'`;
});


let url2 = "https://catfact.ninja/breeds";

async function getRandomBreed() {
    try{

        let result = await axios.get(url2);
        let breeds = result.data.data;
        
        let randomIndex = Math.floor(Math.random() * breeds.length);
        
        return {
            breed: breeds[randomIndex].breed,
            country: breeds[randomIndex].country
        };
    } catch {
        console.log("kuch to gadbad hai bhai");
    }
}
//-----------------------------------------------------------------------------------------------



let btn3 = document.querySelector(".guess");
let select = document.querySelector("#country");
let type = document.querySelector(".type");

let allBreeds = [];     //empty array in which we will insert the data from api


let url3 = "https://catfact.ninja/breeds";


async function loadBreeds() {
    let res = await axios.get("https://catfact.ninja/breeds");
    allBreeds = res.data.data;   // array save in single time so that wont take time for continous request
    return allBreeds;
}

btn3.addEventListener("click", async()=>{

    if(allBreeds.length == 0){
        await loadBreeds();
    }
    let selectedCountry = select.value;
    let result = [];

    for (let breed of allBreeds) {
        if (breed.country.toLowerCase() === selectedCountry.toLowerCase()) {
            result.push(breed.breed);
        }
    }

    if (result.length > 0) {
        type.innerText = result.join(", ");
    } else {
        type.innerText = "No breeds found";
    }

});