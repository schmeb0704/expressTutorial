// paste this to app.js and type npm start on the terminal to start

const express = require("express")
const {products} = require("./data")

const app = express()

// request => middleware => response

/* in this example, you want to get the following information from the request object - method, url, and time. You can do it one-by-one (see the homepage get request), or make a function to get those information for you. The function that you will create is called the middleware. */

const logger = (req, res, next) => { // this is the middleware
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)

    next() // pass to the next middleware or response
}

app.get("/", (req, res)=>{ 
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()

    console.log(method, url, time)
    res.send("Home")
})

app.get("/about", logger,(req, res)=>{ // pass middleware between route and call back function
    res.send("about")
})

app.get("/products", logger, (req, res)=>{
    res.json(products)
})

app.all("*", logger, (req, res)=>{
    res.status(404).send(`<h3 style="font-family: Arial">Page not found :( </h3> <a  style="font-family: Arial"href="/">Home</a>`)
})

app.listen(5000, ()=>{
    console.log("Listening to port 5000...");
})