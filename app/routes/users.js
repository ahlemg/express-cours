import express from "express";



import {
  addNewUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  addOneTodoToUser,
} from "../controllers/user";

import userValidator from "../validators/user";
import {validate} from "../validators";
import verifyToken from "../middleware/auth";

const router = express.Router();

//add user
router.post("/", 

userValidator.addNewUser
,
validate
,
addNewUser);

// get all users
router.get("/",verifyToken, getAllUsers);

// get single user
router.get("/:id", getUserById);

// update one user
router.put("/:id", updateUserById);

// delete one user
router.delete("/:id",deleteUserById)


// add one todo to a user
router.patch("/:id/attachTodo",addOneTodoToUser)

export default router;
