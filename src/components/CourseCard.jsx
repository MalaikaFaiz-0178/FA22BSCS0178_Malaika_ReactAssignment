export default function CourseCard({ image, name, instructor, duration, price }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <span className="absolute top-3 right-3 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          {price}
        </span>
      </div>

      {/* Content Area (Jo image_d7827f.png mein grey tha, ab clean white hai) */}
      <div className="p-6 flex flex-col flex-grow bg-white">
        <h3 className="text-xl font-bold text-slate-800 mb-2 hover:text-cyan-600 transition-colors">
          {name}
        </h3>
        <p className="text-slate-500 text-sm mb-4">
          <span className="font-medium text-slate-400">Instructor:</span> {instructor}
        </p>
        
        <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center text-sm">
          <span className="text-slate-400 font-medium">⏱️ {duration}</span>
          <button className="text-cyan-600 font-semibold hover:text-indigo-600 transition-colors">
            Learn More →
          </button>
        </div>
      </div>
    </div>
  );
}