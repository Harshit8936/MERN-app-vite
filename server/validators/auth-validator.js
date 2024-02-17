const z = require('zod');


// creating the object schema
const signupSchema = z.object({
    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be atleast 3 chars."})
    .max(255,{message:"Name must not be more than 255 chars."}),
    email:z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"Email must be atleast 3 chars."})
    .max(255,{message:"Email must not be more than 255 chars."}),
    password:z
    .string({required_error:"Password is required"})
    .trim()
    .min(8,{message:"password must be atleast 8 chars."})
    .max(255,{message:"password must not be more than 255 chars."}),
    phone:z
    .string({required_error:"Phone is required"})
    .trim()
    .min(10,{message:"phone must be atleast 10 length"})
    .max(10,{message:"phone must not be more than 10 length."})
})
module.exports = signupSchema;
