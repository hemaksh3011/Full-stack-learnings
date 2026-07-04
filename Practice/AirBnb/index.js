const express = require("express");
const app = express();
const mongoose = require("mongoose");
const listing = require("./models/listing.js");


app.use(express.urlencoded({ extended: true }));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/BIDES")
}

main().then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(err);
})

app.get("/",(req,res)=>{
    res.send("Here we go !!");
})

app.get("/testListings",async (req,res)=>{
    let sampleListing = new listing({
        title:"home",
        description:"beach side",
        price:1200,
        location:"goa",
        country:"india",
    });
    await sampleListing.save();
    console.log("Saved");
    res.send("success");
});

app.listen(3300,()=>{
    console.log("Lets Get Started !!");
})