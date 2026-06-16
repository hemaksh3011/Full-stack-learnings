const express = require("express");
const app = express();

let port = 3300;

app.listen(port,()=>{
    console.log(`app is listening on port : ${port}`)
});

app.get("/",(req,res)=>{
    console.log("kya haal bidu request aayi hai");
    res.send({
        name:"hk ",
        class:5
    });
})


app.get("/next",(req,res)=>{
    console.log("kya haal bidu request aayi hai");
    res.send("2nd path");
});

app.get("/another",(req,res)=>{
    console.log("kya haal bidu request aayi hai");
    res.send("3rd path");
});


app.get("/pink",(req,res)=>{
    console.log("kya haal bidu request aayi hai");
    res.send("4rth");
});

app.get("/:username/:id", (req, res) => {
    console.log(req.params);
    res.send("helloooo");
});

app.get("/search", (req, res) => {
    console.log(req.query);
    res.send("no result !");
});     //isme jitna bhi & krke likhnege sab as a text based query me aaega like 'http://localhost:3300/search?q=hk&color=pink'


app.use((req, res) => {
    res.status(404).send("Page not found 😕 Wrong route bro");
});
