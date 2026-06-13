const figlet = require("figlet");


figlet("Chall", function(err,data){
    if(err){
        console.log("something went wrong!");
        console.log(err);
    }else{
        console.log(data);
    }
});