import TaskSchema from "./TaskList.schema.js";

// create Task

export const insertTask = (newTask) => {
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

//read all Task List
export const displayAllTask = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await TaskSchema.find();
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

//get single Task

//update Task

//delete Task
