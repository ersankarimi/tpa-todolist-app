import { useState } from "react";
import { motion } from "framer-motion";

import { Badge, FormInputTodo } from "./components";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Active", "Completed"];

  return (
    <main className="mt-16 flex w-full flex-col items-center gap-8 px-12 text-center">
      <h1 className="text-xl font-bold text-slate-100 sm:text-3xl lg:text-4xl">
        What&apos;s the plan for today ?
      </h1>
      <section className="w-full">
        <FormInputTodo>
          <form className="flex w-full flex-col items-center justify-around gap-8 py-4 md:flex-row">
            <input
              type="text"
              className="w-full appearance-none rounded-md bg-slate-800/20 py-3 px-4 text-slate-100 ring-1 ring-slate-300/10 backdrop-blur-md placeholder:text-sm placeholder:text-slate-400/50 focus:outline-none focus:ring-1 focus:ring-slate-300/40"
              name="add-todo"
              id="add-todo"
              placeholder="What to do ?"
            />
            <motion.button
              type="submit"
              className="w-1/2 rounded-lg bg-slate-700/80 py-2 px-3 text-slate-100/90 shadow-2xl ring-1 ring-slate-900/10 backdrop-blur-sm hover:ring-slate-300/20 focus:outline-none focus:ring-1 focus:ring-slate-300/40"
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

      <section className="flex items-center justify-center gap-4">
        {categories.map((category) => (
          <Badge key={category} isActive={selectedCategory === category}>
            {category}
          </Badge>
        ))}
      </section>
    </main>
  );
}

export default App;
