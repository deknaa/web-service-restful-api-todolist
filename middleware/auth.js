
require("dotenv").config();
const jwt = require('jsonwebtoken');


const verifyToken = (req, res, next) => {
    try {
        const header = req.header.authorization
    
        if(!header) throw new Error("Invalid header");
    
        const token = header.split(" ")[1]
        if(!token) throw new Error("there is no token");
    
        const user = jwt.verify(token, process.env.JTW_KEY);
    
        req.user = user
        next()
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = verifyToken;