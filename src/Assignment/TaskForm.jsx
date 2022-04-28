import { useState } from "react";
import TaskList from "./TaskList";

const task = () => {
  const [amount, updateAmount] = useState(0);
  const [item, updateItem] = useState(amount);
  const [task, updateTask] = useState([]);
  const [input, updateInput] = useState("");

  function handleInput(event) {
    updateInput(event.target.value);
  }

  function addTask(event) {
    event.preventDefault();
    updateTask(task.concat({ input, status: false }));

    updateAmount(amount + 1);
    updateItem(amount + 1);
    updateInput("");
  }

  function taskCounter(status) {
      console.log("1234")
    if (status) {
      updateItem(item - 1);
    } else {
      updateItem(item + 1);
    }
  }

  return (
    <>
      <form>
        <input type="text" value={input} onChange={handleInput}></input>
        <button onClick={addTask}>Add</button>
      </form>
      {
        <p>
          {" "}
          {item} remaining out of {amount} tasks{" "}
        </p>
      }
      <TaskList list={task} updateTask={taskCounter} />
    </>
  );
};

export default task;
