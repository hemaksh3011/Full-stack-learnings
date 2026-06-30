const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");


const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "HEMAKSH",
  password: "Hemakshh3279",
});

let randomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

app.listen("3300", () => {
  console.log("app is listening");
});

app.get("/", (req, res) => {
  let query = "select count(*) from emp";
  try {
    connection.query(query, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("db me problem hai");
  }
});

app.get("/users", (req, res) => {
  let query = `select * from emp`;
  try {
    connection.query(query, (err, users) => {
      if (err) throw err;
      //   let data = result[0]
      res.render("users.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("koi gadbad hai baba");
  }
});

//EDIT ROUTE
app.get("/users/:id/edit", (req, res) => {
  let { id } = req.params;
  let query = `select * from emp where emp_id = '${id}'`;
  try {
    connection.query(query, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("koi gadbad hai baba");
  }
});

//UPDATE ROUTE
app.patch("/users/:id",(req,res)=>{
  let { id } = req.params;
  let { password : formPass, username : newuser } = req.body;
  let query = `select * from emp where emp_id = '${id}'`;
    try {
      connection.query(query, (err, result) => {
        if (err) throw err;
        let user = result[0];
        if(formPass != user.emp_password){
          res.send("galat password hai baba !");
        }else{
          let query2 = `update emp set emp_name='${newuser}' where emp_id = '${id}'`;
          connection.query(query2,(err,result)=>{
            if(err) throw err;
            // res.send(result);
            res.redirect("/users");
          });
        }
      });
    } catch (err) {
      console.log(err);
      res.send("koi gadbad hai baba");
    }
});

//INSERTING DATA IN SQL DATABASE

// let query = "insert into emp values ?";
// let data = [];

// for (let i = 1; i <= 100; i++) {
//   data.push(randomUser());
// };

//connection and feeding into database
// try {
//   connection.query(query, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result);

//   });
// } catch (err) {
//   console.log(err);
// }
// connection.end();
