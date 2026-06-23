const express = require("express");
const app = express();
const port = 3300;

const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/home", (req, res) => {
  res.render("Home.ejs", { posts });
});

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

app.post("/home", (req, res) => {
  let {
    username,
    age,
    field_of_work,
    qualification,
    brief_description,
    profile_image,
  } = req.body;

  let id = uuidv4();

  posts.push({
    id,
    username,
    age,
    field_of_work,
    qualification,
    brief_description,
    profile_image,
  });
  res.redirect("/home");
});

app.get("/home/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});

app.patch("/home/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    username = req.body.username;
    age = req.body.age;
    field_of_work = req.body.field_of_work;
    qualification = req.body.qualification;
    brief_description = req.body.brief_description;
    profile_image = req.body.profile_image;
    res.redirect("/home");
})

app.get("/", (req, res) => {
  res.send("this is a base page");
});

app.listen(port, () => {
  console.log("port chalu hai 3300 par");
});

//random database
let posts = [
  {
    id: uuidv4(),
    username: "Aman Khan",
    age: 24,
    field_of_work: "Video Editing",
    qualification: "Self-taught",
    brief_description:
      "Freelance video editor creating cinematic content for YouTube creators.",
    profile_image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: uuidv4(),
    username: "Rahul Verma",
    age: 22,
    field_of_work: "Web Development",
    qualification: "B.Tech in Computer Science",
    brief_description:
      "Passionate frontend developer skilled in React and modern UI/UX design.",
    profile_image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: uuidv4(),
    username: "Ananya Sharma",
    age: 24,
    field_of_work: "Digital Marketing",
    qualification: "MBA in Marketing",
    brief_description:
      "SEO specialist helping brands grow organically through content strategies.",
    profile_image: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    id: uuidv4(),
    username: "Rohit Mehta",
    age: 27,
    field_of_work: "Finance",
    qualification: "CA",
    brief_description:
      "Experienced financial analyst focusing on investment planning and risk management.",
    profile_image: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    id: uuidv4(),
    username: "Simran Kaur",
    age: 21,
    field_of_work: "Graphic Design",
    qualification: "Diploma in Design",
    brief_description:
      "Creative designer specializing in branding and social media visuals.",
    profile_image: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    id: uuidv4(),
    username: "Arjun Singh",
    age: 25,
    field_of_work: "Software Engineering",
    qualification: "B.Tech IT",
    brief_description:
      "Backend developer working with Node.js and scalable system architectures.",
    profile_image: "https://randomuser.me/api/portraits/men/16.jpg",
  },
  {
    id: uuidv4(),
    username: "Neha Gupta",
    age: 23,
    field_of_work: "Content Writing",
    qualification: "BA in English",
    brief_description:
      "Content writer crafting engaging blogs and storytelling-based articles.",
    profile_image: "https://randomuser.me/api/portraits/women/17.jpg",
  },
  {
    id: uuidv4(),
    username: "Karan Patel",
    age: 26,
    field_of_work: "Entrepreneurship",
    qualification: "BBA",
    brief_description:
      "Startup founder building innovative solutions in the edtech space.",
    profile_image: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    id: uuidv4(),
    username: "Pooja Jain",
    age: 28,
    field_of_work: "Human Resources",
    qualification: "MBA HR",
    brief_description:
      "HR manager focused on talent acquisition and employee engagement.",
    profile_image: "https://randomuser.me/api/portraits/women/19.jpg",
  },
  {
    id: uuidv4(),
    username: "Vikas Yadav",
    age: 29,
    field_of_work: "Civil Engineering",
    qualification: "B.Tech Civil",
    brief_description:
      "Site engineer managing construction projects with efficiency and precision.",
    profile_image: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    id: uuidv4(),
    username: "Riya Malhotra",
    age: 22,
    field_of_work: "Fashion Designing",
    qualification: "Diploma in Fashion Design",
    brief_description:
      "Aspiring fashion designer with a passion for modern and sustainable styles.",
    profile_image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    id: uuidv4(),
    username: "Deepak Choudhary",
    age: 30,
    field_of_work: "Agriculture",
    qualification: "B.Sc Agriculture",
    brief_description:
      "Modern farmer using tech-driven methods to improve crop yield.",
    profile_image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];
