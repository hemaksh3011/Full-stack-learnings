import express from "express";
const app = express();
let port = 3000;

app.listen(port, ()=>{
    console.log(`port ${port} chal gya oyy !`);
});

//ISKA MATLAB HAI KI APN NE EK MESSEGE PRINT KARWAYA HAI KI SERVER CHALU HAI LEKIN BROWSER LOCALHOST:3000 PAR KUCH NAHI AAEGA

// app.use((req,res)=>{
// console.log("request aayi hai bhaii :matlab local host par kahi se access hua hai");
// res.send("OOoo bhaii response aagya !!");    //NORMAL MESSEGE
// res.send({
//     name:"apple"
// });                                          //KOI OBJECT BANA KAR BHEJE
// res.send("<h1>haha</h1>")                    //HTML TAGS
// });

app.get("/",(req,res)=>{
    res.send("you are on root path");
});
app.get("/menu",(req,res)=>{
    res.send("you are on menu path");
});
app.get("/contact",(req,res)=>{
    res.send("you are on contact path");
});
app.get("/services",(req,res)=>{
    res.send("you are on services path");
});

// PATH PARAMETERS HAI JISME URL ME JO BHI DALENGE VO AS A VARIABLE BANEGA JISKA FORMATE KUCH AISA HOGA 

app.get("/:username/:id",(req,res)=>{
    let {username,id} = req.params;
    res.send(`you are on @${username} path which has an id of @${id}`);
});

//AB YAHA APN NE SEARCH QUERY KO FEED KIYA HAI OR USKO PAKAD KAR PRINT KARWA DIYA 

app.get("/search",(req,res)=>{
    let {q} = req.query;
    if(!q){
        res.send("kuch nhi dala kya search query me?");
    };
    res.send(`Here are the results of ${q}`);
});

app.use((req, res) => {
    res.status(404).send("Page not found");
});

app.post("/",(req,res)=>{
    res.send("you are on services path");
});

//YE APAN NE REQUEST MARI HAI LOCALHOST PAR ACCESS KARKE TO SERVER PR LISTEN HOGA OR PRINT AAEGA SATH ME RESPONSE SERVER PAR DIKHEGA