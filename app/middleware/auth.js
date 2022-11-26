import jwt from "../helpers/jwt";

 const verifyToken = async(req, res, next) => {

    let token = req.headers.authorization;
    if (!token) 
        return res.status(401).json({
            message: "No token provided."
        });
        
    
     token = token.split(" ")[1];
    const payload =  await jwt.verifyJWT(token);
    if (!payload)
        return res.status(401).json({
            message: "unauthorized provided."
        })
    
    
    req.query.userId = payload.userId;
    next();

}

export default verifyToken;