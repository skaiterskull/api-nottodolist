import { getUserById } from "../models/user/User.model.js";

export const userAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (authorization) {
      const user = await getUserById(authorization);

      if (user?._id) {
        return next();
      }
    }
    res.status(403).json({
      status: "Error",
      message: "You are not authorized user",
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Error, there was some issue accessing this resources",
    });
  }
};
