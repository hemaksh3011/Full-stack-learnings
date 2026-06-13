let form = document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();     //isse jo actual defualt kaam hone wala hota hai vo nhi kr pata hai vo funtion

    // let user = document.querySelector("#user"); 
    // let pass = document.querySelector("#pass");

    // ek or trika hai dir se directory me se nikal skte hai

    let user = form.elements[0];
    let pass = form.elements[1];

    console.log(user.value);        //yaha innertext chahiye lekin form se direct input data nhi le skte hai DOM me se 
    console.log(pass.value);
}); 