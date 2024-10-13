import { useState } from "react";

function TodoForm({ addTodo }) {
  const [inputData, setInputData] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "",
    color: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      id: Date.now(),
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputData);
    setInputData({
      title: "",
      description: "",
      dueDate: "",
      priority: "",
      color: "",
    });
  };

  return (
    <div className="bg-zinc-900/40 text-gray-600 mt-4 p-3 rounded-lg shadow-md w-full max-w-sm">
      <h2 className="text-2xl font-bold text-white text-center mb-6">
        Add Todo Data
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-600 font-semibold mb-2" htmlFor="title" />
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
          <label className="block text-gray-600 font-semibold mb-2" htmlFor="description" />
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
          <label className="block text-gray-600 font-semibold mb-2" htmlFor="dueDate" />
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={inputData.dueDate}
            onChange={handleInputChange}
            className="w-full p-2 border text-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-800"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600 font-semibold mb-2" htmlFor="priority" />
          <select
            name="priority"
            id="priority"
            value={inputData.priority}
            onChange={handleInputChange}
            className="w-full p-2 border text-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-800"
          >
            <option value="">Select priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-600 font-semibold mb-2" htmlFor="color" />
          <select
            name="color"
            value={inputData.color}
            id="color"
            onChange={handleInputChange}
            className="w-full p-2 border text-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-800"
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
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-white text-gray-600 py-2 rounded-lg transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default TodoForm;