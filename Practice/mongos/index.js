const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

main()
  .then((res) => {
    console.log("successful");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

// const user2 = new User({
//   name: "kumawat",
//   email: "kumwat@gmail.com",
//   age: 22,
// });

// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.insertMany([
//     { name: "kumawat", email: "kumwat@gmail.com", age: 22 },
//     { name: "asssddf", email: "assdfa@gmail.com", age: 23},
//     { name: "bwrwebr", email: "wegvrvrb@gmail.com", age: 26 },
//     { name: "vjobdnfui", email: "isunvisw@gmail.com", age: 28 },
// ]).then((res)=>{
//     console.log(res);
// });

User.find({ age: { $gt: 25 } })
  .then((res) => {
    console.log(res[0].name);
  })
  .catch((err) => {
    console.log(err);
  });
