const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

require("./src/db/conn");
const Register = require("./src/registers");
let email = null;
const port = process.env.PORT || 3000;


const templatesPath = path.join(__dirname, "/templates/views");
const partialsPath = path.join(__dirname, "/templates/partials");

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "hbs");
app.set("views", templatesPath);
hbs.registerPartials(partialsPath);

// app.get("/", (req, res) => {
//     res.render("index");
// })

app.get("/register", (req, res) => {
    res.render("signup");
})

// app.get("/signin", (req, res) => {
//     res.render("signin");
// })

//****temp html instead of hbs********

console.log(__dirname);
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,'/temphtml/index.html'));
})

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname,'/temphtml/signup.html'));
})

app.get("/signin", (req, res) => {
    res.sendFile(path.join(__dirname,'/temphtml/signin.html'));
})

// **Quiz 
app.get("/quizins", (req, res) => {
    res.sendFile(path.join(__dirname,'/temphtml/quiz/quizins.html'));
})

app.get("/quiz", (req, res) => {
    res.sendFile(path.join(__dirname,'/temphtml/quiz/quiz.html'));
})

app.post('/quizy',(req,res)=>{
    
    Register.findOneAndUpdate({email :email},{csshtmlquiz :req.body.Score},(error,data)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log("score saved");
            console.log(Name);
        }
    })
        res.status(201).sendFile(path.join(__dirname,'/temphtml/index.html'));
})

//------------Video-----------------------------------------------------------------
const Nameo='Idris';
app.get("/video", (req, res) => {
    res.render('chat',{
        Name: Nameo
    });
})

app.get("/stream", (req, res) => {
    res.render('chat',{
        Name: Nameo,
        Path: "/vid/20th_century_fox_3d_demo.mp4"
    });
})







// -----------------------sign up
app.post("/register", async (req, res) => {
    try {
        const registerStud = new Register({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
            birth: req.body.birth,
            branch: req.body.branch,
            gender: req.body.gender,
            address: req.body.address,
            class: req.body.class,
        })

        const registered = await registerStud.save();
        res.status(201).sendFile(path.join(__dirname,'/temphtml/index.html'));
    }
    catch (error) {
        res.status(400).send(error);
    }
})

app.get("*", (req, res) => {
    res.send("404 Error !!");
})

// --------------------sign in
app.post("/signin", async (req, res) => {
    try {
        email = req.body.email;
        const password = req.body.password;

        const StudData = await Register.findOne({ email: email });
        if (StudData.password === password) {
            res.status(201).sendFile(path.join(__dirname,'/temphtml/index.html'));
        }
        else {
            res.send("password is not matching !");
        }
    } catch (error) {
        res.status(400).send("Invalid email id")
    }
})

app.listen(port, () => {
    console.log(`listening to the ${port}`);
})
