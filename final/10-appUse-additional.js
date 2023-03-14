// paste this to app.js and type npm start on the terminal to start

const express = require("express")
const {products, people} = require("./data")
const {logger, apiLogger} = require("./logger")
const authorize = require("./authorize")

const app = express()

app.use([authorize, logger]) // you can pass an array of middlewares. Express will execute them in the order that you put them in. In this example, authorize comes first, then logger.
app.use("/api", apiLogger)

app.get("/",(req, res)=>{ 
    console.log("this is from the middleware", req.user) // this is from the middleware
    res.send("Home")
})

app.get("/about", logger,(req, res)=>{
    res.send("about")
})

app.get("/products", (req, res)=>{
    res.json(products)
})

app.get("/api/people/search", (req, res)=>{
    console.log("this is from the middleware", req.user)
    const {name} = req.query
    let peopleList = [...people]
    const individualPerson = peopleList.find(someone => someone.name === name)
    
    if (name){
        if (individualPerson) return res.status(200).json(individualPerson)
        else return res.status(200).send(`<h3style="font-family: Arial" >No record of this person</h3style=> <a style="font-family: Arial" href="/">Home</a>`)
    }

    res.json(people)
})

app.get("/api/people/:uid", (req, res)=>{
    const {uid} = req.params
    let peopleList = [...people]
    const individualPerson = peopleList.find(someone => someone.id === Number(uid))
    
    if(individualPerson){
      return  res.status(200).json(individualPerson)
    } else {
        return res.status(200).send(`<h3 style="font-family: Arial">No record of this person</h3> <a style="font-family: Arial" href="/">Home</a>`)
    }

})

app.all("*", (req, res)=>{
    res.status(404).send(`<h3 style="font-family: Arial">Page not found :( </h3> <a  style="font-family: Arial" href="/">Home</a>`)
})

app.listen(5000, ()=>{
    console.log("Listening to port 5000...");
})

