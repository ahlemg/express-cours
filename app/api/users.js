import express from "express";

import crudService from "../services/crud";
import User from "../models/user";

import {
  addNewUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  addOneTodoToUser,
} from "../controllers/user";

const router = express.Router();

//add user
router.post("/", addNewUser);

// get all users
router.get("/", getAllUsers);

// get single user
router.get("/:id", getUserById);

// update one user
router.put("/:id", updateUserById);

// delete one user
router.delete("/:id",deleteUserById)


// add one todo to a user
router.patch("/:id/attachTodo",addOneTodoToUser)

export default router;
