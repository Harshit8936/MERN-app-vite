// middleware is like a bridge example of river

const adminMiddleware = async(req,res,next)=>{
        try {
            const adminRole = req.user.isAdmin;
            if(!adminRole){
                return res.status(403).send({message:"Access Denied ! You are not an admin"})
            }
            else{
                // if user an admin then it will proceed to next middleware
                next();
            }
        } catch (error) {
            next(error)
        }
}

module.exports = adminMiddleware