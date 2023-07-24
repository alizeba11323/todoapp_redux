import { createSlice } from "@reduxjs/toolkit";
import {
  DeleteTodo,
  UpdateTodo,
  createTodo,
  fetchAllTodos,
} from "../todoActions";

const initialState = {
  loading: false,
  error: "",
  todos: [],
};

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchAllTodos.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchAllTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = action.payload;
    });
    builder.addCase(fetchAllTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(createTodo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.todos.push(action.payload);
    });
    builder.addCase(createTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(UpdateTodo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(UpdateTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
    });
    builder.addCase(UpdateTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(DeleteTodo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(DeleteTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    });
    builder.addCase(DeleteTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default TodoSlice.reducer;
