
const signUpValidator = async ( req, res, next)=>{
    if(!req.body.email || !req.body.password || !req.body.name ||
        !req.body.role || !req.body.address || !req.body.phone ){
        return res.status(400).json({
            success: false,
            data:{},
            err:"Invalid request",
            message:"Missing parameter such as name, email, etc."
        });
    }
    next();
}

const signInValidator = async ( req, res, next)=>{
    if(!req.body.email || !req.body.password ){
        return res.status(400).json({
            success: false,
            data:{},
            err:"Invalid request",
            message:"Missing parameter either email or password"
        });
    }
    next();
}

module.exports={
    signUpValidator,
    signInValidator
}