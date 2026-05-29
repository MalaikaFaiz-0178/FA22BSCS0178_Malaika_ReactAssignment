export default function TeacherCard({ image, name, subject, experience }) {
  return (
    <div className="bg-white border border-gray-200 p-5 rounded-xl flex flex-col sm:flex-row items-center gap-5 shadow-sm w-full">
      
   
      <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-200">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

 
      <div className="text-center sm:text-left">
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        <p className="text-teal-600 text-sm font-medium">{subject}</p>
        <p className="text-gray-500 text-xs mt-1">Experience: {experience}</p>
      </div>

    </div>
  );
}