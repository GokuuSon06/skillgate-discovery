
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, Star } from "lucide-react";

const FeaturedCourse = ({ title, description, duration, rating }: { 
  title: string;
  description: string;
  duration: string;
  rating: number;
}) => (
  <Card className="group hover:shadow-lg transition-all duration-300 border border-gray-200">
    <CardHeader className="space-y-1">
      <CardTitle className="text-xl group-hover:text-primary transition-colors">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {duration}
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400" />
          {rating.toFixed(1)}
        </div>
      </div>
    </CardContent>
  </Card>
);

const Home = () => {
  const featuredCourses = [
    {
      title: "Introduction to Web Development",
      description: "Learn the fundamentals of web development with HTML, CSS, and JavaScript.",
      duration: "8 weeks",
      rating: 4.8,
    },
    {
      title: "Data Science Fundamentals",
      description: "Master the basics of data analysis and visualization.",
      duration: "10 weeks",
      rating: 4.9,
    },
    {
      title: "UX Design Principles",
      description: "Learn how to create user-centered designs that engage and delight.",
      duration: "6 weeks",
      rating: 4.7,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="text-center animate-fadeIn">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Welcome to Your Learning Journey
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Discover courses tailored to help you achieve your goals and advance your career.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <Button className="w-full sm:w-auto flex items-center justify-center gap-2">
                <BookOpen className="w-4 h-4" />
                Browse Courses
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Courses Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course, index) => (
            <FeaturedCourse key={index} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
