export function requiredAuthorization(req, res, next){
    if(req.isAuthenticated()){
        next()
    } else{
        res.status(401).json({ message: "this resource requires authentication" })
    }
}