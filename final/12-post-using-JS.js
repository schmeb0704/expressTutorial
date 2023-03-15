const express = require("express")
const app = express()
const {people} = require("./data")

// static assets for root
app.use(express.static("./methods-public"))

// parse form data
app.use(express.urlencoded({extended: false}))

// parse json data
app.use(express.json()) // handles json data from user

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

app.post("/api/people", (req, res)=>{
    // console.log(req.body);
    const {name} = req.body

    if(!name){
       return res.status(401).send({success: false, msg: "Please enter a name"})
    }
    
    res.status(201).json({success: true, person: name})
})

app.post("/api/postman/people", (req, res)=>{
    const {name} = req.body
    

    if(!name){
        return res.status(401).send({success: false, msg: "Please enter a name"})
    }

    res.status(201).json({success: true, data: [...people, {id: 6, name}]})

})

app.listen(5000, ()=>{
    console.log("server listening");
})