const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

main()
  .then(() => {
    console.log("connectino successful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/texting");
}

app.get("/chat", async (req, res) => {
  let chats = await Chat.find();
  console.log(chats);
  res.render("chats.ejs", { chats });
});

app.get("/chat/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/chat/new", (req, res) => {
  let { from, msg, to } = req.body;
  let newChat = new Chat({
    from: from,
    msg: msg,
    to: to,
    created_at: new Date(),
  });

  newChat
    .save()
    .then((result) => {
      console.log();
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chat");
});

//EDIT ROUTE

app.get("/chat/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});

//UPdate route
app.put("/chat/:id",async (req, res) => {
  let { id } = req.params;
  let { msg : newMsg } = req.body;
  let upChat =await Chat.findByIdAndUpdate(id,{msg : newMsg}, {runValidators:true, new:true });
  res.redirect("/chat");
});

//Delete route
app.delete("/chat/:id", async (req,res)=>{
  let {id}= req.params;
  let delChat = await Chat.findByIdAndDelete(id);
  res.redirect("/chat");
})

app.get("/", (req, res) => {
  res.send("working");
});

app.listen(3300, () => {
  console.log("app is listening");
});
