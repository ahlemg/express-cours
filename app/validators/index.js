
const { validationResult } = require('express-validator');

export const validate = (req, res, next)=>{

    const result = validationResult(req);
    const hasErrors = !result.isEmpty();
    // do something if hasErrors is true
    
    if(hasErrors) {
      return res.status(422).json({
        message: result.errors
      })
  
    }
    next();
  
  }