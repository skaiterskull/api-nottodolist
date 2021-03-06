import mongoose from "mongoose";

const mongoClient = async () => {
  try {
    console.log("connecting the mongoDB . . . . .");

    // const mongoUrl = "mongodb://localhost:27017/task_list";
    const mongoUrl = process.env.MONGO_CLIENT;
    !process.env.MONGO_CLIENT &&
      console.log("Please add mongoDB env variable MONGO_CLIENT");
    const con = await mongoose.connect(mongoUrl);

    if (con) {
      console.log("mongodb connected");
    }
  } catch (error) {
    console.log(error);
  }
};

export default mongoClient;
