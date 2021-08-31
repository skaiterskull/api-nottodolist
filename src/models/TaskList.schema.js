import mongoose from "mongoose";

const TaskListSchema = mongoose.Schema(
  {
    task: {
      type: String,
      require: true,
      default: "",
    },
    hr: {
      type: Number,
      require: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const TaskList = mongoose.model("Task_list", TaskListSchema);

export default TaskList;
