import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteTodo, UpdateTodo } from "../redux/todoActions";
function Todo({ todo }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const dispatch = useDispatch();
  const handleEdit = () => {
    setShow((prev) => !prev);
  };
  const handleCancel = () => {
    setShow(false);
  };
  const handleUpdate = () => {
    dispatch(
      UpdateTodo({
        id: todo.id,
        todo: {
          ...todo,
          title,
        },
      })
    ).then((obj) => {
      console.log(obj);
      setShow(false);
    });
  };
  const handleDelete = () => {
    dispatch(DeleteTodo(todo.id)).then((obj) => console.log(obj));
  };
  return (
    <div>
      {show ? (
        <>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={handleUpdate}>Update Todo</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <h1>{todo.title}</h1>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
}

export default Todo;
