import mongoose from "mongoose";

const TaskListSchema = mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
      default: "",
    },
    hr: {
      type: Number,
      required: true,
      default: "",
    },
    todo: {
      type: Boolean,
      required: true,
      default: true,
    },
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      default: null,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const TaskList = mongoose.model("Task_list", TaskListSchema);

export default TaskList;
