import express from "express";
import bodyParser from "body-parser";
const port = 3000;
const app=express();

const date = new Date;
const onlydate = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const monthNames = ["January", "February", "March", "April", "May","June","July","August","September","October","November","December"];
const fulldate = onlydate + " " + monthNames[month] + " " + year;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res) => {
    res.render("home.ejs");
});

app.get("/casual",(req,res) => {
    res.render("casual.ejs",{datekey: fulldate});
});

app.post("/saveTask", (req,res) => {
    const { task } = req.body;
    console.log("Task saved:", task);
    res.render("casual.ejs",{datekey: fulldate,task:task});
})

app.get("/work",(req,res) => {
    res.render("work.ejs",{datekey: fulldate});
});

app.listen(port, () => {
    console.log("server listening on port ",port);
});



    


