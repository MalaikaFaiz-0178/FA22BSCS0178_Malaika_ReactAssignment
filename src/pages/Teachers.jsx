import TeacherCard from "../components/TeacherCard";

const simpleTeachersList = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    name: "Engr. Fatima Ali",
    subject: "Computer Networks",
    experience: "7 Years",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    name: "Dr. K. Shah",
    subject: "Database Management",
    experience: "12 Years",
  },
];

export default function Teachers() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen text-gray-800">
      
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl font-bold text-gray-900">
          Meet Our Teachers
        </h1>
        <p className="text-gray-600 text-sm mt-2">
          Learn from qualified professionals with real-world industry experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {simpleTeachersList.map((faculty) => (
          <TeacherCard key={faculty.id} {...faculty} />
        ))}
      </div>

    </div>
  );
}