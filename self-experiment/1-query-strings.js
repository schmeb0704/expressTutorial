// paste this to app.js and type npm start on the terminal to start

const express = require("express")
const {people} = require("./data")

const app = express()

app.get("/people", (req, res)=>{
    let peopleList = [...people]
    const {search, nameSorted, initial} = req.query

    const searchedFor = peopleList.find(person => person.name === search)
    
    if(initial){
        peopleList = peopleList.filter(person => person.name.startsWith(initial))
    }

    if(nameSorted === "yes"){
        peopleList = peopleList.sort((a, b) => (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0)
    }

    if(search){
        if (searchedFor){
            return res.status(200).json(searchedFor)
        } else{
            return res.status(200).send(`<h3 style="font-family: Arial">Name not found. Search for another name?</h3>`)
        }
    }

    res.send(peopleList)
})

app.listen(5000, ()=>{
    console.log("Listening to port 5000...");
})