import UserSchema from "./User.schema.js";
export const insertUser = (newTask) => {
  return new Promise((resolve, reject) => {
    UserSchema(newTask)
      .save()
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getUser = (userName) => {
  try {
    const data = UserSchema.findOne(userName);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getUserById = (_id) => {
  try {
    const data = UserSchema.findById(_id);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
