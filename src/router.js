import express from "express";
const router = express.Router();

import {
  insertTask,
  displayAllTask,
  getSingleTask,
  deleteTask,
} from "./models/TaskList.model.js";

router.all("/", (req, res, next) => {
  console.log("got hit");
  // res.send("ok");
  next();
});
// RETURN ALL THE TAKS AND A SINGLE TASK BY ID (OPTIONAL)--------------------------------------
router.get("/:_id?", async (req, res) => {
  try {
    const { _id } = req.params;
    let result = null;
    if (_id) {
      result = await getSingleTask(_id);
      res.json({
        message: result._id ? "Task found" : "Task not found",
        result,
      });
    } else {
      result = await displayAllTask();
      res.json({
        result,
      });
    }
  } catch (error) {
    res.json({
      status: "error",
      message: "Unable to add the ticket, please try again later",
    });
  }
});
//INSERT NEW TASK------------------------------------------------------------------------------
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
//UPDATE TASK---------------------------------------------------------------------------------
router.patch("/", (req, res) => {
  console.log(req.body);
  res.json({
    message: "return from patch",
  });
});
//DELETE TASK----------------------------------------------------------------------------------
router.delete("/", async (req, res) => {
  console.log(req.body);
  const result = await deleteTask(req.body);
  console.log(result);
  if (result?.deletedCount > 0) {
    return res.json({
      status: "Success",
      message: "The task has been deleted",
    });
  }
  res.json({
    status: "Failed",
    message: "Please try again",
  });
});

export default router;
