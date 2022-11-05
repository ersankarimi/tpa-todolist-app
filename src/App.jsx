import { useState } from "react";
import { useSelector } from "react-redux";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

import { Badge, EmptyTodo, FormInputTodo, TodoItem } from "./components";

function App() {
  const { todos } = useSelector((store) => store.todo);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categoryOnHover, setCategoryOnHover] = useState("null");
  const categories = ["All", "Active", "Completed"];

  const parentsVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <motion.main
      className="mt-16 flex h-full w-full flex-col items-center gap-8 px-12 pb-20 text-center sm:px-32 lg:px-44 xl:px-64 2xl:w-3/4 2xl:px-96"
      layout
    >
      <h1 className="text-xl font-bold text-slate-100 sm:text-3xl lg:text-4xl">
        What&apos;s the plan for today ?
      </h1>
      <section className="mt-4 w-full">
        <FormInputTodo>
          <form className="flex w-full flex-col items-center justify-around gap-8 py-4  md:flex-row">
            <input
              type="text"
              className="w-full appearance-none rounded-md bg-slate-800/20 py-3 px-4 text-slate-100 ring-1 ring-slate-300/10 backdrop-blur-md placeholder:text-sm placeholder:text-slate-400/80 focus:outline-none focus:ring-1 focus:ring-slate-300/40"
              name="add-todo"
              id="add-todo"
              placeholder="What to do ?"
              autoComplete="off"
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

      <motion.section
        className="mt-16 flex w-full flex-col gap-5 py-4"
        initial="hidden"
        animate="visible"
        variants={parentsVariants}
      >
        <LayoutGroup id="todos-list">
          <AnimatePresence mode="popLayout">
            {!todos.length && <EmptyTodo />}
            {todos.length &&
              todos.map((todo) => <TodoItem {...todo} key={todo.todo} />)}
          </AnimatePresence>
        </LayoutGroup>
      </motion.section>
    </motion.main>
  );
}

export default App;
