import TaskSchema from "./TaskList.schema.js";

//RETURN ALL THE TASK------------------------------------------------------------------------------
export const displayAllTask = async () => {
  try {
    const result = await TaskSchema.find();
    return result;
  } catch (error) {
    return error;
  }
};
//INSERT TASK-------------------------------------------------------------------------------------
export const insertTask = async (newTask) => {
  return new Promise((resolve, reject) => {
    TaskSchema(newTask)
      .save()
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

//get single Task

//update Task

//delete Task
