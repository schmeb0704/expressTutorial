const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)

    next() // goes to next middleware
}

const apiLogger = (req, res, next) => {
    console.log("this came from the /api url");
    next()
}

module.exports = {logger, apiLogger}