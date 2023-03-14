// paste this to app.js and type npm start on the terminal to start

const express = require("express")
const {products} = require("./data")
const app = express()


app.get("/", (req, res)=>{
    res.status(200).send(`<h1 style="font-family: Arial">Home Page</h1><a style=" font-family: Arial"href="/api/products">Products</a>`)
})

app.get("/api/products", (req, res)=>{
    const no_descript_products = products.map(product => { const {id, name, image} = product 
        return {id, name, image}})
    res.json(no_descript_products)
})

app.get("/api/products/:productId", (req, res)=>{
    const {productId} = req.params // returns a string
    const singleProduct = products.find(product => product.id === Number(productId)) // is undefined if nothing is found

    if (!singleProduct){ // takes care of undefined
        res.status(404).send(`<h1 style="font-family: Arial">No product listed... </h1> <a style="font-family: Arial" href="/">Home</a>`)
    }

    res.json(singleProduct)
})


app.all("*", (req, res)=>{
    res.status(404).send(`<h1 style="font-family: Arial">Page not found, try again later...</h1> <a style="font-family: Arial" href="/">Home</a>`)
})


app.listen(5000, ()=>{
    console.log("Server is listening at port 5000...");
})