import { useRef, useState } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);
  const [inputData, setInputData] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "",
    color: "",
  });


  const [todos, setTodos] = useState([]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, inputData]);
    setInputData({
      title: "",
      description: "",
      dueDate: "",
      priority: "",
      color: "",
    });
  };
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-screen flex gap-9 flex-row p-5 "
    >
      <div className=" lg:w-1/4 xl:w-1/5 md:w-1/3 flex-shrink-0 max-h-screen bg-zinc-800 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
            Add Todo Data
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                className="block text-gray-600 font-semibold mb-2"
                htmlFor="title"
              />
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter Title here"
                value={inputData.title}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-800"
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-600 font-semibold mb-2"
                htmlFor="description"
              />
              <input
                type="text"
                id="description"
                name="description"
                placeholder="Enter Todos here"
                value={inputData.description}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-800"
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-600 font-semibold mb-2"
                htmlFor="dueDate"
              />
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                value={inputData.dueDate}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-800"
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-600 font-semibold mb-2"
                htmlFor="priority"
              />
              <select
                name="priority"
                id="priority"
                value={inputData.priority}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-800"
              >
                <option value="">Select priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div>
              <label
                className="block text-gray-600 font-semibold mb-2"
                htmlFor="color"
              />
              <select
                name="color"
                value={inputData.color}
                id="color"
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-800"
                required
              >
                <option value="">Select color</option>
                <option value="#a3e635">green</option>
                <option value="#3f3f46">zinc</option>
                <option value="#be123c">Rose</option>
                <option value="#0ea5e9">Sky</option>
                <option value="#ef4444">Red</option>
                <option value="#1e293b">Slate</option>
                <option value="#f97316">Orange</option>
                <option value="#c026d3">Violet</option>
                <option value="##7c3aed">Orange</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-zinc-900/90 text-white py-2 rounded-lg transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="lg:w-3/4 xl:w-4/5 md:w-2/3 flex flex-wrap gap-5">
        {todos.map((todo, index) => (
          <Card todo={todo} reference={ref} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Foreground;
