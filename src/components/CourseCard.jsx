export default function CourseCard({ image, name, instructor, duration, price }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col">
      
    
      <div className="h-44 bg-gray-100 relative">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <span className="absolute top-2 right-2 bg-teal-600 text-white font-bold text-xs px-3 py-1 rounded-md">
          {price}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-base font-bold text-gray-900 line-clamp-2 min-h-[48px]">
          {name}
        </h3>
        <p className="text-gray-500 text-xs mt-2">
          Teacher: <span className="font-medium text-teal-600">{instructor}</span>
        </p>
        

        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <span>⏱️ Duration: {duration}</span>
          <span className="text-teal-600 font-semibold hover:underline cursor-pointer">Read More →</span>
        </div>
      </div>

    </div>
  );
}