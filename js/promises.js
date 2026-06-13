function upload (data){
    return new Promise((resolve, reject) => {
        let speed = Math.floor(Math.random() *10)+1;
        if(speed > 3){
            resolve("success:uploaded");
        }else{
            reject("failure:Not uploaded");
        }
    });
}

upload("hemaksh").then(()=>{
    console.log("1st done");
    return upload("kumawat");
})
.then(()=>{
    console.log("2nd done");
    return upload("is king");
})
.then(()=>{
    console.log("3rd done");
})
.catch(()=>{
    console.log("failed");
});