import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-300 font-semibold"
      : "text-white hover:text-yellow-200";

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-2xl font-bold">EduSite</h1>

        <div className="flex gap-6 text-sm md:text-base">
          <NavLink className={linkClass} to="/">Home</NavLink>
          <NavLink className={linkClass} to="/courses">Courses</NavLink>
          <NavLink className={linkClass} to="/teachers">Teachers</NavLink>
          <NavLink className={linkClass} to="/dashboard">Dashboard</NavLink>
          <NavLink className={linkClass} to="/contact">Contact</NavLink>
        </div>

      </div>
    </nav>
  );
}