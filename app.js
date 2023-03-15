const express = require("express")
const app = express()
const people_route = require("./routes/people")
const auth_route = require("./routes/auth")

app.use(express.static("./methods-public"))

app.use(express.urlencoded({extended: false}))

app.use(express.json())

app.use("/api/people", people_route) // set up base route, and you should be all set. This is much cleaner than the old set up
app.use("/login", auth_route)



app.listen(5000, ()=>{
    console.log("server listening");
})