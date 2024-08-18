const isAuthorizedUser= async (req, res, next) =>{
      if("user"!= req.user.role){
        return res.status(404).json({
            data:{},
            success:false,
            message:"Unauthorized access",
            err:{}
        })
      }
      next();
}

const isAuthorizedAdmin= async (req, res, next) =>{
  if("admin"!= req.user.role){
    return res.status(404).json({
        data:{},
        success:false,
        message:"Unauthorized access",
        err:{}
    })
  }
  next();
}

module.exports={
  isAuthorizedAdmin,
  isAuthorizedUser
}