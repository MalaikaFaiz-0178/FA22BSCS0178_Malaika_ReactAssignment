import { useState } from "react";

export default function Dashboard() {
  const [students, setStudents] = useState([
    { id: 1, name: "M. Kamran" },
    { id: 2, name: "Zain Ali" }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    const newStudent = {
      id: Date.now(),
      name: inputValue.trim()
    };
    
    setStudents([...students, newStudent]);
    setInputValue("");
  };

  const handleDelete = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen p-8 flex flex-col items-center">
      <div className="max-w-2xl w-full mt-6">
        
        {/* DASHBOARD TITLE */}
        <h1 className="text-3xl font-bold mb-6 tracking-wide text-left">
          Dashboard Portal
        </h1>

        {/* INPUT FORM */}
        <form onSubmit={handleAddStudent} className="flex gap-3 mb-8">
          <input
            type="text"
            placeholder="Enter student name..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-grow bg-slate-900 border border-slate-700 text-white placeholder-slate-400 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
          />
          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors duration-200 shadow cursor-pointer"
          >
            Add Student
          </button>
        </form>

        <div className="space-y-3">
          {students.length === 0 ? (
            <p className="text-slate-400 text-sm text-center py-4 bg-slate-900/50 border border-slate-800 rounded-lg">
              No students added yet.
            </p>
          ) : (
            students.map((student) => (
              <div
                key={student.id}
                className="bg-slate-900 border border-slate-800 rounded-lg p-4 flex justify-between items-center shadow-sm hover:border-slate-700 transition-colors"
              >
             
                <span className="text-sm font-medium text-slate-100 tracking-wide">
                  {student.name}
                </span>
                
                {/* DELETE BUTTON */}
                <button
                  onClick={() => handleDelete(student.id)}
                  className="text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors duration-150 cursor-pointer px-3 py-1.5 rounded hover:bg-rose-500/10"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}