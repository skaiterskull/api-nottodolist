import { useState } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import { addTask } from "../tasks-list/taskAction.js";
import { requestFailed } from "../tasks-list/taskSlice.js";
import { useDispatch, useSelector } from "react-redux";

const initialFromDt = {
  task: "Watching TV",
  hr: 10,
};

export const AddTaskForm = () => {
  const dispatch = useDispatch();
  const { totalHrs } = useSelector((state) => state.task);
  const [formDt, setFormDt] = useState(initialFromDt);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormDt({
      ...formDt,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (totalHrs + +formDt.hr > 168) {
      dispatch(
        requestFailed({
          status: "Error",
          message: "You dont have enough hours to add",
        })
      );
    } else {
      const userid = window.localStorage.getItem("_id");
      dispatch(addTask({ ...formDt, userid }));
    }
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Row>
        <Col md={7} className="mb-2">
          <Form.Control
            name="task"
            placeholder="Task"
            value={formDt.task}
            required
            onChange={handleOnChange}
          />
        </Col>
        <Col>
          <Form.Control
            type="number"
            name="hr"
            placeholder="Hour"
            value={formDt.hr}
            required
            onChange={handleOnChange}
          />
        </Col>
        <Col>
          <Button type="submit">Add Task</Button>
        </Col>
      </Row>
    </Form>
  );
};
