const express = require("express")
const app = express()
const {people} = require("./data")

app.get("/api/people", (req, res)=>{ // .get method is the default for browsers
    res.status(200).json(people)
})


app.listen(5000, ()=>{
    console.log("server listening");
})