const {Schema,model} = require('mongoose');

const contactSchema = new Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    message:{type:String,required:true},
    createdAt:{type:Date,default:Date.now()},
})
module.exports = model('Contact',contactSchema)
