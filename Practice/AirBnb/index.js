const express = require("express");
const app = express();
const mongoose = require("mongoose");
const listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const engine = require("ejs-mate");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", engine);
app.use(express.static(path.join(__dirname, "public")));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/BIDES");
}

main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

// app.get("/", (req, res) => {
//   res.send("Here we go !!");
// });

//Main route
app.get("/", async (req, res) => {
  const alllisting = await listing.find({});
  const count = await listing.countDocuments({});
  res.render("listings/alllistings.ejs", { alllisting,count });
});

//add route
app.get("/add-new", (req, res) => {
  res.render("listings/add.ejs");
});



//posting new prop
app.post("/", async (req, res) => {
  //let { title, description, imageurl, price, location, country } = req.body;
  let newlist = req.body.newlist;
  const newlisting = new listing(newlist);
  await newlisting.save();
  res.redirect("/");
});

//edit property
app.get("/:id/edit", async (req, res) => {
  let { id } = req.params;
  const edit = await listing.findById(id);
  res.render("listings/edit.ejs",{edit});
});

//put req
app.put("/:id", async(req,res)=>{
    let {id} = req.params;
    await listing.findByIdAndUpdate(id,{...req.body.edit});
    res.redirect("/");
})

//delete req
app.delete("/:id",async(req,res)=>{
    let {id} = req.params;
    await listing.findByIdAndDelete(id,{});
    res.redirect("/");
})

// app.get("/testListings", async (req, res) => {
//   let sampleListing = new listing({
//     title: "home",
//     description: "beach side",
//     price: 1200,
//     location: "goa",
//     country: "india",
//   });
//   await sampleListing.save();
//   console.log("Saved");
//   res.send("success");
// });

app.listen(3300, () => {
  console.log("Lets Get Started !!");
});
//show route
app.get("/:id", async (req, res) => {
  let { id } = req.params;
  const lists = await listing.findById(id);
  res.render("listings/show.ejs", { lists });
});