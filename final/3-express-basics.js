const express = require("express")
const app = express()


app.get("/", (req, res)=>{ 
    res.status(200).send("Home Page")
})

app.get("/about", (req, res)=>{
    res.status(200).send("About Page")
})

app.all("*", (req, res)=>{
    res.status(404).send(`<h1 style="font-family: Arial">Page not found</h1>`)
}) // handles all http verbs


app.listen(5000, ()=>{
    console.log("server is listening on port 5000...");
})