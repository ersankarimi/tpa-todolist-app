import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  todos: [
    {
      id: 1,
      isCompleted: false,
      todo: "Meet with my friends",
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
      id: 2,
      isCompleted: false,
      todo: "Bucin ygy wkwkwkw",
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: intialState,
  reducers: {},
});

const todoReducer = todoSlice.reducer;
export default todoReducer;
