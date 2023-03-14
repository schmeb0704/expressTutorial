// paste this to app.js and type npm start on the terminal to start
const express = require("express")
const {products, people} = require("./data")
const morgan = require("morgan")

const app = express()

app.use(morgan("tiny"))

app.get("/about",(req, res)=>{
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

