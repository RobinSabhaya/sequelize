const admin = require('../db/models/adminSchema');
const adminController = {
    async postAdmin (req,res){
        if(req.user.role == 'admin'){
            const {name,email,password} = req.body;
        await admin.create({name:name,email:email,password:password});
        return res.status(201).json({
            status : 200,
            message : 'admin created successfully'})
        }
        return res.json({
            status : 401,
            message: "its admin area access denied for customer"
        })
    },
}

module.exports = adminController;