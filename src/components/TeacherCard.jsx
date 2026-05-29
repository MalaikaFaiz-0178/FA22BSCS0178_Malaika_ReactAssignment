export default function TeacherCard(props) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl text-center transition flex flex-col items-center justify-center border border-gray-100">
      
      <img
        src={props.image}
        alt={props.name}
        className="w-24 h-24 rounded-full object-cover shadow-md bg-gray-200"
      />

      <h2 className="mt-4 font-bold text-xl text-gray-800">{props.name}</h2>
      <p className="text-blue-600 font-medium">{props.subject}</p>
      <p className="text-sm text-gray-400 mt-1">{props.experience} Experience</p>

    </div>
  );
}