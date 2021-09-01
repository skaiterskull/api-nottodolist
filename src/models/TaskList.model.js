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
//RETURN SINGLE TASK-------------------------------------------------------------------------------
export const getSingleTask = async (_id) => {
  try {
    const result = await TaskSchema.findById(_id);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

//INSERT TASK-------------------------------------------------------------------------------------
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

//update Task

//DELETE TASK-------------------------------------------------------------------------------------
export const deleteTask = async (ids) => {
  try {
    const result = await TaskSchema.deleteOne(ids);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};
