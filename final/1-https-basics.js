const http = require("http")

const server = http.createServer((req, res)=>{

    if(req.url === "/"){
        res.writeHead(200, {"content-type": "text/html"})
        res.write(`<h1 style="font-family: Arial">Home Page</h1>`)
        return res.end()
    }else if(req.url === "/about"){
        res.writeHead(200, {"content-type": "text/html"})
        res.write(`<h1 style="font-family: Arial">About us</h1>`)
        return res.end()
    }else{
        res.writeHead(404, {"content-type":"text/html"})
        res.write(`<h1 style="font-family: Arial">Error 404</h1>
        <p style="font-family: Arial">Page not found... :(</p>`)
        res.end()

    }

})

server.listen(5000, ()=>{
    console.log("Listening on port 5000");
})