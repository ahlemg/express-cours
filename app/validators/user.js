const { body } = require('express-validator');

const userValidator = {

    addNewUser:[ 
    body("fname")
    .exists()
    .withMessage("First name is required")
    .isLength({min:2})
    .withMessage("First name must be larger than 2 caratcters"),
    body("lname")
    .exists()
    .withMessage("Last name is required"),
    body("email")
    .exists()
    .withMessage("Last name is required")
    .isEmail()
    .withMessage("Format email invalid"),

    body("password")
    .exists()
    .withMessage("Password  is required")
    .isLength({min:8})
    .withMessage("password must contain min 8 caracters")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
    .withMessage("password must contains uper case, lower case and number and ends up with  lettre")
    ],

    
    updateUserById : [ 
    body("fname")
    .exists()
    .withMessage("First name is required")
    .isLength({min:2})
    .withMessage("First name must be larger than 2 caratcters"),
    body("lname")
    .exists()
    .withMessage("Last name is required")
    
    ]
}

export default userValidator;