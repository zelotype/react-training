const TaskList = ({ list }) => {
  const handleClick = (task) => (event) => {
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty("text-decoration");
    } else {
      event.target.style.setProperty("text-decoration", "line-through");
    }
  };
  const taskLists = list.map((item) => (
    <li onClick={handleClick(item)}>{item.input}</li>
  ));
  return <ul>{taskLists}</ul>;
};

export default TaskList;
