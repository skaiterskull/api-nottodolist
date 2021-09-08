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
