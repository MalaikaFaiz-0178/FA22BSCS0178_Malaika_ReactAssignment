import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-teal-600 text-white shadow-md sticky top-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
     
        <div className="text-xl font-bold tracking-wide">
         NexusAcademy
        </div>


        <div className="flex gap-6 text-sm font-medium">
          {[
            { to: "/", label: "Home" },
            { to: "/courses", label: "Our Courses" },
            { to: "/teachers", label: "Our Teachers" },
            { to: "/dashboard", label: "Dashboard" },
            { to: "/contact", label: "Contact Us" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition-colors duration-200 hover:text-teal-200 pb-1 ${
                  isActive ? "border-b-2 border-white font-bold text-white" : "text-teal-100"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

      </div>
    </nav>
  );
}