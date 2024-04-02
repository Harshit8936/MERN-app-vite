const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    phone:{type:String,require:true},
    isAdmin:{type:Boolean,default:false},
    createdAt:{type:Date,default:Date.now()},
});
userSchema.pre("save",async function(next){
        const user = this;
        if(!user.isModified("password")){
            next();
        }
        try {
            // hash the password
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(user.password,salt);
            user.password = hashPassword
        } catch (error) {
            next(error);
        }
})

// compare the password
userSchema.methods.comparePassword = async function(password){
    return bcrypt.compare(password,this.password);
}

// Tokens JWT typically not stored in db along with user details. Instaed, they are issued by server during the authentication process and then stored in the client side (in cookie or localstorage) for later use.
// instance methods
userSchema.methods.generateToken = async function(){
            try {
                //payload to pass
                return jwt.sign({
                    userId:this._id.toString(),
                    email:this.email,
                    isAdmin:this.isAdmin,
                },process.env.JWT_SECRET_KEY,{
                    expiresIn:"30d",
                })
            } catch (error) {
                console.error(error)
            }
}


module.exports = mongoose.model('User',userSchema)