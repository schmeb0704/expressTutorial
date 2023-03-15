const express = require("express")
const app = express()
const {people} = require("./data")

// static assets for root
app.use(express.static("./methods-public"))

// parse form data
app.use(express.urlencoded({extended: false})) // we will have access to the form data once this is successful

app.get("/api/people", (req, res)=>{ // .get method is the default for browsers
    res.status(200).json(people)
})

app.post("/login", (req, res)=>{
    const {name} = req.body

    if(!name){
       return res.status(401).send("Please enter a name")
    }
    
    res.status(200).send(`Logged in as ${name}`)
})

app.listen(5000, ()=>{
    console.log("server listening");
})