// paste this to app.js and type npm start on the terminal to start

const express = require("express")
const {products} = require("./data")
const app = express()


app.get("/", (req, res)=>{
    res.status(200).json([{name: "john"}, {name: "sean"}]) // manual setup for response
})

app.get("/products", (req, res)=>{
    res.status(200).json(products) // getting data from another file
})


app.listen(5000, ()=>{
    console.log("Server is listening at port 5000...");
})