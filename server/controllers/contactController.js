const Contact = require('../models/Contact');

const contact = async(req,res,next)=>{
    try {
        const response = req.body;
        await Contact.create(response);
        res.status(200).send({success:true,message:"Message sent successfully"})
    } catch (error) {
        res.status(400).send({success:false,message:"message not delivered !",})
    }
}

module.exports = {contact}
