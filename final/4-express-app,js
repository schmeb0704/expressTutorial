// paste this to app.js and type npm start on the terminal to start

// compare how cleaner this looks compared to http module
const express = require("express")
const server = express()
const path = require("path")

// set static and middleware
server.use(express.static("./public")) // static refers to files that the server doesn't have to change. Express will set up the MIME types for all files inside this folder.

server.get("/shop", (req, res)=>{
    console.log("from /shop");
    res.end()
})

server.all("*", (req,res)=>{
    res.status(404).sendFile(path.resolve(__dirname, "./public/not_found.html"))
})

server.listen(5000, ()=>{
    console.log("listening...");
})