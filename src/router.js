import express from "express";
const router = express.Router();

import { insertTask, displayAllTask } from "./models/TaskList.model.js";

router.all("/", (req, res, next) => {
  console.log("got hit");
  // res.send("ok");
  next();
});

// return all the task
router.get("/", async (req, res) => {
  try {
    const result = await displayAllTask();
    res.json({
      status: "success",
      result,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: "Unable to add the ticket, please try again later",
    });
  }
});

// receive new task and store in database
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const result = await insertTask(req.body);
    res.json({
      message: "return from post",
      result,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: "Unable to add the ticket, please try again later",
    });
  }
});

// update the data in the database
router.patch("/", (req, res) => {
  console.log(req.body);
  res.json({
    message: "return from patch",
  });
});

//delete the data in the database based on the ids received
router.delete("/", (req, res) => {
  console.log(req.body);
  res.json({
    message: "return from delete",
  });
});

export default router;
