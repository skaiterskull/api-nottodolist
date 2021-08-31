import express from "express";
const router = express.Router();

import {
  insertTask,
  displayAllTask,
  getSingleTask,
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
    } else {
      result = await displayAllTask();
    }
    res.json({
      message: result?._id ? "Task found" : "Task not found",
      result,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: "Unable to add the ticket, please try again later",
    });
  }
});
// RETURN SINGLE TASK--------------------------------------------------------------------------
// router.get("/:_id?", async (req, res) => {

//   const result = await getSingleTask(_id);
//   console.log(_id);

// });

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
router.delete("/", (req, res) => {
  console.log(req.body);
  res.json({
    message: "return from delete",
  });
});

export default router;
