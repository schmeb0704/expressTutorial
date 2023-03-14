// paste this to app.js and type npm start on the terminal to start

const express = require("express")
const {products, people} = require("./data")
const {logger, apiLogger} = require("./logger")

const app = express()

/* if you have a looooot of routes, adding each middleware to each route would be time consuming and the code will look chaotic. This is where .use method comes to the rescue.*/

app.use(logger) // adds the middleware to each route that is below this line. if there is a route that comes before this line, then it will not add the middleware to that route. ***APPLIES TO ALL ROUTES***

app.use("/api", apiLogger) // with the added route parameter, the middleware will only be applied to any route that has the same path as the parameter. In this example, /api/people. ***APPLIES TO ROUTES CONTAINING THE FIRST PARAMETER***

app.get("/",(req, res)=>{ 
    res.send("Home")
})

app.get("/about", logger,(req, res)=>{
    res.send("about")
})

app.get("/products", (req, res)=>{
    res.json(products)
})

app.get("/api/people", (req, res)=>{
    res.json(people)
})

app.all("*", (req, res)=>{
    res.status(404).send(`<h3 style="font-family: Arial">Page not found :( </h3> <a  style="font-family: Arial"href="/">Home</a>`)
})

app.listen(5000, ()=>{
    console.log("Listening to port 5000...");
})