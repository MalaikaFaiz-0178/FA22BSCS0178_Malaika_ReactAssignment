import CourseCard from "../components/CourseCard";

const courses = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400",
    name: "React JS Core Bootcamp",
    instructor: "Ali Khan",
    duration: "2 Months",
    price: "$120",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400",
    name: "Python for Data Science",
    instructor: "Sara",
    duration: "3 Months",
    price: "$150",
  },
];

export default function Courses() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">

      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Our Courses
      </h1>

      {/* FIX: Mobile par 1 card, tablet par 2 cards, aur laptops par 3 cards automatically set honge */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {courses.map((c) => (
          <CourseCard key={c.id} {...c} />
        ))}
      </div>

    </div>
  );
}