import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createTodo } from "../redux/todoActions";
function CreateTodo() {
  const [title, setTitle] = useState("");
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleAddTodo = () => {
    dispatch(
      createTodo({
        userId: 1,
        id: todos.todos.length + 1,
        title,
        completed: false,
      })
    );
    setTitle("");
  };
  return (
    <div>
      <input type="text" name="title" value={title} onChange={handleChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}

export default CreateTodo;
