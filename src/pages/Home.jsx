import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center py-20 px-4 shadow-inner">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Learn Modern Skills Online
        </h1>

        <p className="mt-4 text-lg text-blue-100 max-w-xl mx-auto">
          Build your future with expert-led courses and professional hands-on projects.
        </p>

        <Link to="/courses">
          <button className="mt-6 bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all duration-200 cursor-pointer shadow-lg hover:scale-105 active:scale-98">
            Explore Courses
          </button>
        </Link>
      </div>

      {/* FIX: Mobile par 'flex-col' (upar-neeche) aur laptop screen par 'md:flex-row' (line-wise) */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center gap-6 p-8 mt-6">

        {[
          { title: "Web Dev", desc: "Build dynamic React apps", accent: "border-blue-200 bg-blue-50/50 text-blue-700" },
          { title: "AI", desc: "Learn data models easily", accent: "border-indigo-200 bg-indigo-50/50 text-indigo-700" },
          { title: "Python", desc: "Automate scripts & logic", accent: "border-purple-200 bg-purple-50/50 text-purple-700" }
        ].map((item) => (
          <div key={item.title}
            className={`border ${item.accent} p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 text-center min-w-[220px] flex-1`}>
            <h2 className="font-bold text-xl">{item.title}</h2>
            <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
          </div>
        ))}

      </div>

    </div>
  );
}