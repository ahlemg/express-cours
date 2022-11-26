import express from "express";

import authController from "../controllers/auth";
import authValidator from "../validators/auth";
import {validate}  from "../validators";

const router = express.Router();

router.post("/", authValidator.loginUser, validate, authController.loginUser )

export default router;