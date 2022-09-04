import express from "express";

const userRouter = express.Router();

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {

    
  }) //to catch the error in async function inside it
);
