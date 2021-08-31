import express from "express";
const router = express.Router();

import { insertTask, displayAllTask } from "./models/TaskList.model.js";

router.all("/", (req, res, next) => {
  console.log("got hit");
  // res.send("ok");
  next();
});
// RETURN ALL THE TAKS-------------------------------------------------------------------------
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
