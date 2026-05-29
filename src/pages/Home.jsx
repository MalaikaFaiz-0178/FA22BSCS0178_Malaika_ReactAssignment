import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">


      <div className="bg-white border-b border-gray-200 py-20 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 max-w-2xl mx-auto">
          Welcome to Our Educational Platform
        </h1>
        <p className="mt-4 text-base text-gray-600 max-w-xl mx-auto">
          Learn coding, networks, and computer science skills with our easy-to-follow professional training programs.
        </p>
        <Link to="/courses">
          <button className="mt-6 bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200 shadow cursor-pointer">
            View All Courses
          </button>
        </Link>
      </div>


      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center gap-6 p-8 mt-8">
        {[
          { title: "Web Development", desc: "Learn to build modern websites using HTML, CSS, JavaScript and React." },
          { title: "Computer Networks", desc: "Understand basic network configurations, routing, and system safety." },
          { title: "Expert Faculty", desc: "Study under the guidance of experienced teachers from the IT industry." }
        ].map((item) => (
          <div key={item.title} className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm text-left flex-1">
            <h2 className="font-bold text-lg text-teal-600">{item.title}</h2>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
}