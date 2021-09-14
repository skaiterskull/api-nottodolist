import express from "express";
const router = express.Router();
import { insertUser, getUser } from "../models/user/User.model.js";

router.all("/", (req, res, next) => {
  console.log("got hit");
  // res.send("ok");
  next();
});

// login user
router.post("/", async (req, res) => {
  try {
    const result = await getUser(req.body);

    if (result?._id) {
      return res.json({
        status: "Success",
        message: "User found, proceed to login page",
        result,
      });
    } else {
      return res.json({
        status: "Error",
        message: "User not found, register needed",
        result,
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      status: "Error",
      message: "Unable to login, please try again later",
    });
  }
});

//Create new user
router.post("/register", async (req, res) => {
  console.log(req.body);
  try {
    const result = await insertUser(req.body);
    if (result._id) {
      res.json({
        status: "Success",
        message: "Success, new user has been created",
        result,
      });
    } else {
      res.json({
        status: "Error",
        message: "Unable to create user",
        result,
      });
    }
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      res.json({
        status: "Error",
        message: "Username already exist, please try another username",
      });
    } else
      res.json({
        status: "Error",
        message: "Unable to add the user, please try again later",
      });
  }
});

export default router;
