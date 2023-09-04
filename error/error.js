const {ValidationError} = require('sequelize');

const error = (err,req,res,next) =>{
    if(err instanceof ValidationError){
        return res.json( {
            status : 400,
            message : err.message
        });
    } 
    next();
}

module.exports = error;