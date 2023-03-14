const authorize = (req, res, next) => {
    const {user} = req.query

    console.log("Authenticating...")

    if(user === "sean"){
        req.user = {name: "sean", id: 4} // you can actually access this in the path that this applies to. It's now available everywhere this middleware is applied
        next()
    } else{
        res.status(401).send("Unauthorized")
    }

}

module.exports = authorize