const bcrypt = require("bcrypt");

import userService from "../services/user";
import jwt from "../helpers/jwt";

const loginUser = async(req, res) => {

    const {email, password} = req.body;

    const user =  await userService.findUser({email}, "userId password -_id");

    if(!user) return res.status(400).json({
        message: "user or password invalid"
    });

    const match = await bcrypt.compare(password, user.password);


    if(!match) {
        return res.status(400).json({
            message: "user or password invalid"
        });
    }
    
    const token =  await jwt.generateJWT({userId: user.userId});
    console.log("token:::::", token)
    if(!token)
    return res.status(500).json({
        message: "Internal server error",
        
    });
    console.log("token::::", token)
    return res.status(200).json({
        message: "Login successfully",
        data: {
        token 
        }
    });


    



}

export default {
    loginUser
}