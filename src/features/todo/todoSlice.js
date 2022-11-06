import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  todos: [
    {
      id: 1,
      isCompleted: false,
      todo: "Meet with my friends loreadasd asd as asd asd asd asdas dasd as",
    },
    {
      id: 2,
      isCompleted: false,
      todo: "Ke panti",
    },
    {
      id: 3,
      isCompleted: false,
      todo: "Modded kibod",
    },
    {
      id: 4,
      isCompleted: false,
      todo: "Bucin ygy wkwkwkw",
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: intialState,
  reducers: {
    addTodo: (state, actions) => {
      state.todos = [...state.todos, actions.payload];
    },
    removeTodo: (state, actions) => {
      state.todos = state.todos.filter((todo) => todo.id !== actions.payload);
    },
  },
});

const todoReducer = todoSlice.reducer;

export const { removeTodo, addTodo } = todoSlice.actions;
export default todoReducer;
