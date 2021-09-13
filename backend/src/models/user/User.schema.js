import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      index: 1,
    },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("User", UserSchema);

export default user;
