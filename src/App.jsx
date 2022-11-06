import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

import { addTodo } from "./features/todo/todoSlice";
import { Badge, EmptyTodo, FormInputTodo, TodoItem } from "./components";

function App() {
  const { todos } = useSelector((store) => store.todo);
  const dispatch = useDispatch();
  const inputTodoRef = useRef(null);
  const [newTodoValue, setNewTodoValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categoryOnHover, setCategoryOnHover] = useState("null");
  const categories = ["All", "Active", "Completed"];

  const handleAddNewTodo = (event) => {
    event.preventDefault();
    if (newTodoValue.length < 3) {
      inputTodoRef.current.classList.add("animate-shaking");

      setTimeout(() => {
        inputTodoRef.current.classList.remove("animate-shaking");
      }, 500);
      return;
    }

    const payload = {
      id: Date.now(),
      isCompleted: false,
      todo: newTodoValue,
    };

    dispatch(addTodo(payload));
    setNewTodoValue("");
  };

  return (
    <main className="mt-16 flex w-full flex-col items-center gap-8 overflow-auto px-12 pb-20 text-center sm:px-32 lg:px-44 xl:px-64 2xl:w-3/4 2xl:px-96">
      <h1 className="text-xl font-bold text-slate-100 sm:text-3xl lg:text-4xl">
        What&apos;s the plan for today ?
      </h1>
      <section className="mt-4 w-full">
        <FormInputTodo>
          <form
            className="flex w-full flex-col items-center justify-around gap-8 py-4  md:flex-row"
            onSubmit={handleAddNewTodo}
          >
            <input
              type="text"
              ref={inputTodoRef}
              className="w-full appearance-none rounded-md bg-slate-800/20 py-3 px-4 text-slate-100 ring-1 ring-slate-300/10 backdrop-blur-md placeholder:text-sm placeholder:text-slate-400/80 focus:outline-none focus:ring-1 focus:ring-slate-300/40"
              name="add-todo"
              id="add-todo"
              placeholder="What to do ?"
              autoComplete="off"
              value={newTodoValue}
              onChange={(event) => setNewTodoValue(event.target.value)}
            />
            <motion.button
              type="submit"
              className="w-1/2 rounded-lg bg-slate-700/80 py-3 px-4 text-slate-100/90 shadow-2xl ring-1 ring-slate-900/10 backdrop-blur-sm hover:ring-slate-300/20 focus:outline-none focus:ring-1 focus:ring-slate-300/40 lg:w-1/3 lg:px-4"
              whileTap={{
                scale: 0.925,
                transition: {
                  duration: 0.15,
                },
              }}
            >
              Add
            </motion.button>
          </form>
        </FormInputTodo>
      </section>

      <section
        className="flex items-center justify-center gap-4 lg:gap-8"
        onMouseLeave={() => setCategoryOnHover("null")}
      >
        <LayoutGroup id="badges-group">
          {categories.map((category) => (
            <Badge
              key={category}
              setSelectedCategory={setSelectedCategory}
              setCategoryOnHover={setCategoryOnHover}
              onHover={categoryOnHover === category}
              isActive={selectedCategory === category}
            >
              {category}
            </Badge>
          ))}
        </LayoutGroup>
      </section>

      <section className="mt-16 flex w-full flex-col gap-5 py-2">
        {todos.length < 1 && <EmptyTodo inputTodoRef={inputTodoRef} />}
        <AnimatePresence mode="sync">
          {todos.length > 0 &&
            todos.map((todo, index) => (
              <TodoItem {...todo} index={index} key={todo.id} />
            ))}
        </AnimatePresence>
      </section>
    </main>
  );
}

export default App;
