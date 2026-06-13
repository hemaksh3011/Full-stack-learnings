import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
let port = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/hello", (req, res) => {
    res.send("hello");
});

app.listen(port, () => {
    console.log(`we're on the ${port} onboard`);
});
