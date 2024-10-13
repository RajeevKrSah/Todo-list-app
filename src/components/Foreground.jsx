import { useRef, useState } from "react";
import Card from "./Card";
import TodoForm from "./TodoForm";

function Foreground() {
  const ref = useRef(null);
  const [todos, setTodos] = useState([]);
  const [showCards, setShowCards] = useState(false);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-screen flex gap-9 flex-row p-5 "
    >
      <div className="p-2">
        <button
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          onClick={() => setShowCards(!showCards)}
        >
          {showCards ? "Done" : "Add new todos"}
        </button>
        {showCards && <TodoForm addTodo={addTodo} />}
      </div>

      <div className="flex flex-wrap gap-5">
        {todos.map((todo) => (
          <Card
            todo={todo}
            reference={ref}
            key={todo.id}
            onDelete={() => handleDelete(todo.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Foreground;
