const Service = require('../models/Service');


const addService = async(req,res)=>{
        try {
            const{service,description,price,provider} = req.body;
            const serviceObj = new Service({
                service,description,price,provider
            })
            const newService = await serviceObj.save();
            res.status(200).send({success:true,message:"Service added !"})
        } catch (error) {
            res.status(400).send({success:false,message:error})
        }
}

// get all services
const getAllServices = async(req,res)=>{
    try {
        const allServices = await Service.find();
        if(!allServices){
            return res.status(404).send({success:false,message:"No service found"})
        }
        res.status(200).send({success:true,service:allServices,message:"Get all services !"})
    } catch (error) {
        res.status(400).send({success:false,message:error})
    }
}
module.exports = {addService,getAllServices}