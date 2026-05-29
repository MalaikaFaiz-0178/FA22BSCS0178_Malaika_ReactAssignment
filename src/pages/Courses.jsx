import CourseCard from "../components/CourseCard";

const simpleCoursesList = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=500",
    name: "Web Development & React Core",
    instructor: "Prof. Aman Ahmed",
    duration: "3 Months",
    price: "$150",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500",
    name: "Introduction to Computer Networks",
    instructor: "Engr. Fatima Ali",
    duration: "4 Months",
    price: "$180",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500",
    name: "Database Management Systems",
    instructor: "Dr. K. Shah",
    duration: "3 Months",
    price: "$160",
  }
];

export default function Courses() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen text-gray-800">
      
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Our Courses
        </h1>
        <p className="text-gray-600 text-sm">
          Choose from our best programs to start building your technical skills today.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {simpleCoursesList.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>

    </div>
  );
}