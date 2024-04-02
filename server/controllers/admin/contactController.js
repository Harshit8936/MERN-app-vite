const Contact = require('../../models/Contact');

// get all contacts
const allContacts = async(req,res,next)=>{
        try {
            const contacts = await Contact.find();
            if(!contacts || contacts.length===0){
                return res.status(404).send({message:"No Contacts Found"})
            }
            res.status(200).send({contacts:contacts,message:"Contacts fetch"})
        } catch (error) {
            next(error)
        }
}

module.exports = {allContacts}