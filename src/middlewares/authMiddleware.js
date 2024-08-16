const  UserService = require('../services/user-service');

const userService= new UserService();
const AuthMiddleware = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization.trim();
        if(!authorization.startsWith("Bearer ")){
            return res.status(400).json({
                success: false, 
                data:{},
                err:error,
                message:"Invalid bearer token"
            });
        }
        const token = req.headers.authorization.split(" ")[1];
        const response = await userService.verifyToken(token);
        if(!response){
            return res.status(400).json({
                success:false, 
                data:{},
                err:"Invalid token",
                message:"User is not authenticated"
            })
        }
        const user = await userService.findByEmail(response.email);
        if(!user){
            return res.status(400).json({
                success:false, 
                data:{},
                err:"Invalid user",
                message:"User does not exist anymore"
            })
        }
        delete response.iat;
        delete response.exp;
        req.user=response;
        next();

    } catch (error) {
         console.log("Something went wrong in authMiddleware");
         return res.status(400).json({
            success: false, 
            data:{},
            err:error,
            message:"Access denied"
        });
    }
}

module.exports=AuthMiddleware;