import express from "express";

import crudService from "../services/crud";
import User from "../models/user";

import { addNewUser } from "../controllers/user";

const router = express.Router();

//add user
router.post("/", addNewUser);

export default router;
