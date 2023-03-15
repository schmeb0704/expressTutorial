const express = require("express")
const router = express.Router()


router.post("/", (req, res)=>{
    const {name} = req.body

    if(!name){
       return res.status(401).json({success: false, message: `Please enter a name`})
    }
    
    res.status(200).json({success: true, message: `Logged in as ${name}`})
})

module.exports = router