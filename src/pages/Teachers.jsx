import TeacherCard from "../components/TeacherCard";

const teachers = [
  {
    id: 1,
    // Sahi Male Image Sir Ali ke liye
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    name: "Sir Ali",
    subject: "React",
    experience: "5 Years",
  },
  {
    id: 2,
    // Sahi Female Image Ma'am Sara ke liye
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    name: "Ma'am Sara",
    subject: "Python",
    experience: "4 Years",
  },
];

export default function Teachers() {
  return (
    <div className="p-8 grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      {teachers.map((t) => (
        <TeacherCard key={t.id} {...t} />
      ))}
    </div>
  );
}