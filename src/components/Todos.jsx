import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTodos } from "../redux/todoActions";
import Todo from "./Todo";
function Todos() {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllTodos());
  }, [dispatch]);
  return (
    <div>
      {todos?.todos?.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default Todos;
