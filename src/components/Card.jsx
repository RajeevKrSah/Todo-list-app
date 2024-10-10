import { FaRegFileAlt } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { motion } from "framer-motion";

function Card({ todo, reference }) {
  // Get the current date
  const currentDate = new Date();
  // Extract the day and month
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      className=" relative flex-shrink-0 w-52 h-64 rounded-[45px] bg-zinc-900/90 text-white px-5 py-6 overflow-hidden"
    >
      <div className="flex items-center gap-5">
        <FaRegFileAlt />
        <div className="font-serif font-medium">
          {day} {month} {year}
        </div>
      </div>
      <h2 className="text-lg font-bold line-clamp-2 mt-1 leading-5">
        {todo.title}
      </h2>
      <p className="text-sm leading-tight mt-3 font-serif ">
        {todo.description}
      </p>
      <div className="footer absolute bottom-0 w-full left-0 ">
        <div className="flex items-center justify-between px-6 py-2 mb-2">
          <h5>{todo.priority}</h5>
          <span className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center">
            <RiDeleteBin6Line size=".9em" color="#fff" />
          </span>
        </div>

        <div
          className="tag w-full py-2 flex items-center justify-center"
          style={{ backgroundColor: `${todo.color}` }}
        >
          <h2 className="text-lg font-medium">Due Date: {todo.dueDate}</h2>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
