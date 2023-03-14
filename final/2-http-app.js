// paste this to app.js and type npm start on the terminal to start

const http = require("http")
const {readFileSync} = require("fs")

// get all files

const homePage = readFileSync("./navbar-app/index.html")
const homeImage = readFileSync("./navbar-app/logo.svg")
const homeStyles = readFileSync("./navbar-app/styles.css")
const homeJS = readFileSync("./navbar-app/browser-app.js")
const notFoundImage = readFileSync("./images/not_found.png")



const server = http.createServer((req, res)=>{

    if(req.url === "/"){
        res.writeHead(200, {"content-type": "text/html"})
        res.write(homePage)
        return res.end()
    }else if(req.url === "/about"){
        res.writeHead(200, {"content-type": "text/html"})
        res.write(`<h1 style="font-family: Arial">About us</h1>`)
        return res.end()
    }else if(req.url === "/logo.svg"){
        res.writeHead(200, {"content-type": "image/svg+xml"})
        res.write(homeImage)
        return res.end()

    }else if(req.url === "/images/not_found.png"){
        res.writeHead(200, {"content-type": "image/png"})
        res.write(notFoundImage)
        return res.end()
    }else if(req.url === "/styles.css"){
        res.writeHead(200, {"content-type": "text/css"})
        res.write(homeStyles)
        return res.end()
    }else if(req.url === "/browser-app.js"){
        res.writeHead(200, {"content-type": "text/javascript"})
        res.write(homeJS)
        return res.end()
    }else{
        res.writeHead(404, {"content-type":"text/html"})
        res.write(`<h1 style="font-family: Arial">Error 404</h1>
        <p style="font-family: Arial">Page not found... :(</p>
        <img src="./images/not_found.png">
        `)
        res.end()

    }

})

server.listen(5000, ()=>{
    console.log("Listening on port 5000");
})