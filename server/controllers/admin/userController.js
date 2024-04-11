const User = require('../../models/User');


// get all users for admin
const allUsers = async(req,res,next)=>{
            try {
                // const users = await User.find().select({password:0});
                const users = await User.find({},{password:0});
                if(!users || users.length===0){
                    return res.status(404).send({message:"No Users Found"})
                }
                res.status(200).send({users:users,message:"Get all users"})
            } catch (error) {
                // res.status(400).send({message:error})
                next(error)
            }
}

// delete an user by admin
const deleteUser = async(req,res,next)=>{
        try {
            const id = req.params.id;
            const findUser = await User.findByIdAndDelete(id);
            if(!findUser){
                return res.status(404).send({message:"No User Found"})
            }
            res.status(200).send({message:'User Deleted'})
        } catch (error) {
            next(error)
        }
}

// fetch user by Id
const editUser = async(req,res,next)=>{
        try {
            const id = req.params.id;
            const user = await User.findById(id).select({password:0});
            if(!user){
                return res.status(404).send({message:"No User Found"})
            }
            res.status(200).send({message:"User fetched",data:user})
        } catch (error) {
            next(error)
        }
}

// update an exisitng  by admin
const updateUser = async(req,res,next)=>{
        try {
            const id = req.query.id;
            const user = await User.findById(id);
            if(!user){
                return res.status(404).send({message:"No User Found"})
            }
            const updatedData = req.body
            const updatedUser = await User.updateOne({_id:id},{$set:updatedData});
            res.status(200).send({message:"User Updated",updatedUser:updatedUser})
        } catch (error) {
            next(error)
        }
}


module.exports = {allUsers,deleteUser,updateUser,editUser}