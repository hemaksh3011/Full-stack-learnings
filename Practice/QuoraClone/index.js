const express = require("express");
const app = express();
const port = 3300;

const path = require("path");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true })); //ye isiliye hota hai taki express json ya url wala data read kr skte
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); //ye isiliye taki jo bhi views naam ke pages banenge vo directly access kr lega.

app.use(express.static(path.join(__dirname, "public"))); //same ye bhi path ko access krne ke liye hai taki css or js banaye to .

const { v4: uuidv4 } = require("uuid");

let posts = [
  // ye isiliye qki databases nahi hai
  {
    id: uuidv4(),
    username: "hk",
    content: "Ram ram bhai hk bolta hai",
  },
  {
    id: uuidv4(),
    username: "kh",
    content: "Ram ram bhai kh bolta hai",
  },
  {
    id: uuidv4(),
    username: "hhkk",
    content: "Ram ram bhai hhkk bolta hai",
  },
];

app.get("/post", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/post/new", (req, res) => {
  res.render("newPost.ejs");
});

app.post("/post", (req, res) => {
  let { username, content } = req.body; //is location par form ne data send kiya jo bhi req ki body me pada hai ab usko variable me lekr post wali array me push kr denge
  let id = uuidv4();
  posts.push({ id, username, content }); //ye yaha push ho gya or main page pr loop laga kr print krwa diya
  res.redirect("/post"); // ye response print na krke main page pr redirect krega to new post directly visible ho jaega.
});

app.get("/post/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  console.log(post);
  res.render("detailedPost.ejs", { post });
});

app.patch("/post/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => id === p.id);
  post.content = newContent;
  console.log(post);
  res.redirect("/post");
});

app.get("/post/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});

app.delete("/post/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/post");
});

app.listen(port, () => {
  console.log(`${port} chal gya`);
});
