const {Schema,model} = require('mongoose');
const serviceSchema = new Schema({
    service:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:String,required:true},
    provider:{type:String,required:true},
    createdAt:{type:Date,default:Date.now()},
})
module.exports = model('Service',serviceSchema)