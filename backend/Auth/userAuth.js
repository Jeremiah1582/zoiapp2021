exports.isVerified =(req,res,next)=>{
    console.log('auth log token is', req);
    if(req.body.token)
    next()
}