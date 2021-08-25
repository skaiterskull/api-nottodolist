import express from "express";
const router = express.Router();

router.all("/", (req, res) => {
  console.log("got hit");
  res.send("ok");
});

export default router;
