const express = require("express");
const { handleGetAllUsers, handleCreateUser, handleVerifyUser } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.get("/", handleGetAllUsers)
userRouter.post("/sign-up", handleCreateUser)
userRouter.post("/verify", handleVerifyUser)


module.exports = userRouter
