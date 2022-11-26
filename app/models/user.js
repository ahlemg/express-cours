import mongoose from "mongoose";

import uuid from "../helpers/uuid";

const userSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password :{
      type: String,
      required: true
    },
    fname: String,
    lname: String,
    todos: [{ type: mongoose.ObjectId, ref: "Todo" }],
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  this.userId = uuid({ prefix: "USR" });
  next();
});
const User = mongoose.model("User", userSchema);

export default User;
