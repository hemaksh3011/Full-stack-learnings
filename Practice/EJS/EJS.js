const express = require("express");
const app = express();
const path = require("path");

const port = 3300;

app.use(express.static(path.join(__dirname,"/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/helo", (req, res) => {
  res.render("helo.ejs");
});

app.get("/dice/:username", (req, res) => {
  let diceValue = Math.floor(Math.random() * 6) + 1;
  let {username} = req.params;
  let names = ["asd","sdfg","erg"];

  res.render("dice.ejs", { diceValue, username, names });

});

app.get("/instagram/:dataname",(req,res)=>{
    let {dataname} = req.params;
    const instaData = require("./InstaData.json");
    let data = instaData[dataname]
    // console.log(data);
    res.render("instagram.ejs", {data});
})

app.listen(port, () => {
  console.log(`port listening on ${port}`);
});