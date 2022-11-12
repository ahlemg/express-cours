import mongoose from "mongoose";

import uuid from "../helpers/uuid";

const userSchema = mongoose.Schema({
    userId:{
        type: String,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    fname: String,
    lname: String
},
{timestamps: true}

);

userSchema.pre("save", function(next){
 this.userId = uuid({prefix:"USR"});
 next();
    
})
const User =  mongoose.model("User", userSchema);

export default User;