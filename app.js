import express from "express";
const app = express();
import morgan from "morgan";

const PORT = 8000;

//Connect to mongoDB
import mongoClient from "./src/config/db.js";
mongoClient();

//middlewares
app.use(express.urlencoded());
app.use(express.json());
app.use(morgan("tiny"));

//load modules
import routers from "./src/router.js";

app.use("/api/v1", routers);

app.use("/", (req, res) => {
  res.send("You have reached the API of not to do list application");
});

app.listen(PORT, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log(`Server is running at http://localhost:${PORT}`);
});
