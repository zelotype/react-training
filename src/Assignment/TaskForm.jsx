import { useState } from "react";
import TaskList from "./TaskList";

const task = () => {
    const [amount, updateAmount] = useState(0);
    const [task, updateTask] = useState([]);
    const [input, updateInput] = useState("");

    function handleInput(event) {
        updateInput(event.target.value);
    }

    function addTask(event) {
        event.preventDefault();
        updateTask(task.concat({ input, status: false}));

        updateAmount(amount+1);
        updateInput("");
    }
    
    return(
        <>
            <form>
                <input type="text" value={input} onChange={handleInput}></input>
                <button onClick={addTask}>Add</button>
            </form>
            { <p> {amount} remaining out of {amount} tasks </p> }
            <TaskList list={task}/>
        </>
    )
}

export default task