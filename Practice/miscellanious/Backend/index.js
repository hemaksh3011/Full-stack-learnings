const express = require("express");
const app = express();

const port = 3300;

app.use(express.urlencoded({ express: true }));
app.use(express.json());

app.get("/register", (req, res) => {
  let { username, password } = req.query;
  res.send(`Get request from ${username}`);
});
app.post("/register", (req, res) => {
    let { username, password } = req.body;
    res.send(`Post request from ${username}`);
});

app.listen(port, () => {
  console.log(`app is listening on ${port}`);
});
