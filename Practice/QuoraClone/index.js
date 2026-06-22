const express = require("express");
const app = express();
const port = 3300;

const path = require("path");

app.use(express.urlencoded({ extended: true })); //ye isiliye hota hai taki express json ya url wala data read kr skte

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); //ye isiliye taki jo bhi views naam ke pages banenge vo directly access kr lega.

app.use(express.static(path.join(__dirname, "public"))); //same ye bhi path ko access krne ke liye hai taki css or js banaye to .

let posts = [
  // ye isiliye qki databases nahi hai
  {
    username: "hk",
    content: "Ram ram bhai hk bolta hai",
  },
  {
    username: "kh",
    content: "Ram ram bhai kh bolta hai",
  },
  {
    username: "hhkk",
    content: "Ram ram bhai hhkk bolta hai",
  },
];

app.get("/post", (req, res) => {
  res.render("index.ejs", { posts });
});

app.listen(port, () => {
  console.log(`${port} chal gya`);
});
