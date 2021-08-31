import TicketSchema from "./TaskList.schema.js";

// create Task

export const insertTask = (newTask) => {
  return new Promise((resolve, reject) => {
    TicketSchema(newTask)
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

//get single Task

//update Task

//delete Task
