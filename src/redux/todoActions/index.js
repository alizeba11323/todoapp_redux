import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllTodos = createAsyncThunk(
  "todo/fetchtodo",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:8000/todos");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const createTodo = createAsyncThunk(
  "todo/createTodo",
  async (todo, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:8000/todos", todo);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const UpdateTodo = createAsyncThunk(
  "todo/updateTodo",
  async ({ id, todo }, { rejectWithValue }) => {
    try {
      const res = await axios.put(`http://localhost:8000/todos/${id}`, todo);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const DeleteTodo = createAsyncThunk(
  "todo/deleteTodo",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete("http://localhost:8000/todos/" + id);
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
