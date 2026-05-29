import { useState } from "react";

export default function Dashboard() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task) return;
    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">

      <h1 className="text-3xl font-bold mb-5">Student Dashboard</h1>

      <div className="flex gap-2">
        <input
          className="border p-2 w-full rounded"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add task..."
        />

        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 rounded hover:scale-105 transition"
        >
          Add
        </button>
      </div>

      <ul className="mt-6 space-y-2">

        {tasks.map((t, i) => (
          <li
            key={i}
            className="bg-white p-3 shadow rounded flex justify-between"
          >
            {t}

            <button
              onClick={() =>
                setTasks(tasks.filter((_, index) => index !== i))
              }
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}

      </ul>

    </div>
  );
}