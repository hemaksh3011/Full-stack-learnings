const mongoose = require("mongoose");
const Chat = require("./models/chat");


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

const chats = [
    {
      from: "hema",
      to: "kema",
      msg: "data send kr",
      created_at: new Date(),
    },
    {
      from: "rahul",
      to: "aman",
      msg: "hello bhai",
      created_at: new Date(),
    },
    {
      from: "priya",
      to: "neha",
      msg: "kal milte hain",
      created_at: new Date(),
    },
    {
      from: "rohit",
      to: "simran",
      msg: "project complete ho gaya",
      created_at: new Date(),
    },
    {
      from: "ankit",
      to: "riya",
      msg: "meeting kab hai?",
      created_at: new Date(),
    },
    {
      from: "sneha",
      to: "karan",
      msg: "notes bhej dena",
      created_at: new Date(),
    },
    {
      from: "vikas",
      to: "deepak",
      msg: "lunch chalte hain",
      created_at: new Date(),
    },
    {
      from: "pooja",
      to: "nisha",
      msg: "assignment submit kar diya",
      created_at: new Date(),
    },
    {
      from: "arjun",
      to: "mohit",
      msg: "call kar lena",
      created_at: new Date(),
    },
    {
      from: "kavya",
      to: "aditya",
      msg: "good morning 😊",
      created_at: new Date(),
    },
  ];

Chat.insertMany(chats);