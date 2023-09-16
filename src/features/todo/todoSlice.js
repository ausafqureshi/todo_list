import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  inputValue: "",
  requestedUpdateId: "",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      if (todo.text !== "") {
        state.todos.push(todo);
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      // edit btn then it goes in input
      let itemIndex = state.todos.findIndex(
        (e) => e.id === state.requestedUpdateId
      );
      state.todos[itemIndex] = {
        text: state.inputValue,
        id: state.requestedUpdateId,
      };
      state.inputValue = "";
      state.requestedUpdateId = "";
    },
    setInput: (state, action) => {
      state.inputValue = action.payload;
    },
    setRequestedUpdateId: (state, action) => {
      state.requestedUpdateId = action.payload;
    },
  },
});

export const { addTodo, removeTodo, setInput, setRequestedUpdateId, editTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
