import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import path from "path";

const PORT = process.env.PORT || 5000;

//Connect to mongoDB
import mongoClient from "./src/config/db.js";
mongoClient();

//middlewares
app.use(express.urlencoded());
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());
app.use(helmet());

//load modules
import taskRouter from "./src/routers/taskRouter.js";
import userRouter from "./src/routers/userRouter.js";
import { userAuth } from "./src/middlewares/auth.middleware.js";
app.use("/api/v1/task", userAuth, taskRouter);
app.use("/api/v1/user", userRouter);

//serve static files
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/build")));

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/build", "index.html"));
});

app.listen(PORT, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log(`Server is running at http://localhost:${PORT}`);
});
