import express from "express";
const app = express();
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

const PORT = 8000;

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

app.use("/", (req, res) => {
  res.send("You have reached the API of not to do list application");
});

app.listen(PORT, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log(`Server is running at http://localhost:${PORT}`);
});
