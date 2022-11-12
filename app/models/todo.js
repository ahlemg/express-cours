import mongoose from "mongoose";
import { stringify } from "querystring";

const todoSchema =  mongoose.Schema({
    todoId: {
        type:String,
        unique: true,
        required:true
    },
    todo: String,
    completed:{
        type:Boolean,
        default: false
    },
    user: {
        type:mongoose.ObjectId,
        ref: "User"
    }
});

const Todo =  mongoose.model("Todo", todoSchema);

export default Todo;