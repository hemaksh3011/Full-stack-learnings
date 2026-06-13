const heads = document.querySelector("#heads");
const btns = document.querySelector("#btns");
const para = document.querySelector("#photo");
const url = "https://dog.ceo/api/breed/hound/images";


btns.addEventListener("click",async()=>{
    let result = await getPhoto();
    const para = document.querySelector("#photo");
    para.setAttribute("src",result);
    // para.innerText = result;
    console.log(result)

});


async function getPhoto(){
    try{
        let randomIdx = Math.floor(Math.random()*800)+1;
        console.log(randomIdx);
        let result = await axios.get(url);
        return result.data.message[randomIdx];
    }catch(e){
        console.log("error aaya hai:",e);
    }
}