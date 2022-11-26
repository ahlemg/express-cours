require("dotenv").config();

var jwt = require('jsonwebtoken');

const JWT_SECRET =  process.env.JWT_SECRET;

const generateJWT = (payload) => {
try {
     const token = jwt.sign({
        payload
      }, JWT_SECRET, { expiresIn: '1h' });
      return token;
    }catch (err){

        console.log("generateJWT error:::", err);
        return null;

        
    }

}

const verifyJWT = (token) =>{
    try{
   const payload =  jwt.verify(token, JWT_SECRET);
   return payload
    }catch (err) {
        
        console.log("verify JWT error:::", err);
        return null;



    }


}

export default {
    generateJWT,
    verifyJWT
}