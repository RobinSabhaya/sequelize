const jwt = require('jsonwebtoken');
const auth = (req,res,next) =>{
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({
            status : 401,
            message : "unauthorized"
        })
    };
    const user = jwt.verify(authHeader.slice(7),process.env.JWT_SECRET)
    req.user = user;
    next();
}

module.exports = auth;