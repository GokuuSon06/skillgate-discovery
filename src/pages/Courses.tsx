
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, Star, Users, CheckCircle2 } from "lucide-react";

const CourseCard = ({ 
  title, 
  description, 
  duration, 
  rating, 
  students,
  keyPoints 
}: { 
  title: string;
  description: string;
  duration: string;
  rating: number;
  students: number;
  keyPoints: string[];
}) => (
  <Card className="group hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden">
    <CardHeader className="space-y-1 bg-gradient-to-r from-purple-50 to-blue-50">
      <CardTitle className="text-2xl font-playfair group-hover:text-primary transition-colors">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="pt-6">
      <p className="text-gray-600 mb-6 font-inter leading-relaxed">{description}</p>
      
      <div className="space-y-4 mb-6">
        {keyPoints.map((point, index) => (
          <div key={index} className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
            <span className="text-gray-700">{point}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-primary" />
            {duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4 text-primary" />
            {students.toLocaleString()} students
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400" />
          {rating.toFixed(1)}
        </div>
      </div>

      <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
        <BookOpen className="w-4 h-4 mr-2" />
        Enroll Now
      </Button>
    </CardContent>
  </Card>
);

const Courses = () => {
  const courses = [
    {
      title: "Java Full Stack Training",
      description: "Comprehensive training program covering Java, Spring Boot, Hibernate, and modern web development frameworks. Learn to build scalable enterprise applications from start to finish.",
      duration: "16 weeks",
      rating: 4.8,
      students: 15400,
      keyPoints: [
        "Core Java fundamentals and advanced concepts",
        "Spring Boot and Spring Framework",
        "Hibernate ORM and JPA",
        "RESTful Web Services development",
        "Frontend development with React"
      ]
    },
    {
      title: "Python Full Stack Training",
      description: "Master Python programming and full-stack web development using modern frameworks like Django and Flask. Build complete web applications with both frontend and backend expertise.",
      duration: "14 weeks",
      rating: 4.9,
      students: 18200,
      keyPoints: [
        "Python programming fundamentals",
        "Django framework for web development",
        "Flask microframework",
        "Database management with PostgreSQL",
        "Frontend integration with modern JavaScript"
      ]
    },
    {
      title: "Advanced AI",
      description: "Deep dive into artificial intelligence and machine learning. Learn to build intelligent systems using cutting-edge technologies and frameworks.",
      duration: "12 weeks",
      rating: 4.9,
      students: 12600,
      keyPoints: [
        "Machine Learning algorithms",
        "Deep Learning with TensorFlow",
        "Natural Language Processing",
        "Computer Vision applications",
        "AI model deployment"
      ]
    },
    {
      title: "Data Science Training",
      description: "Comprehensive data science program covering statistics, machine learning, and data visualization. Learn to extract insights from complex datasets.",
      duration: "16 weeks",
      rating: 4.7,
      students: 14800,
      keyPoints: [
        "Statistical analysis and mathematics",
        "Data visualization with Python",
        "Machine Learning models",
        "Big Data processing",
        "Real-world project implementation"
      ]
    },
    {
      title: "Amazon Web Services (AWS)",
      description: "Master cloud computing with AWS. Learn to architect and deploy scalable, highly available, and fault-tolerant systems on Amazon Web Services.",
      duration: "10 weeks",
      rating: 4.8,
      students: 16900,
      keyPoints: [
        "EC2 and Virtual Machines",
        "S3 and Cloud Storage",
        "AWS Lambda and Serverless",
        "Cloud Security best practices",
        "DevOps on AWS"
      ]
    },
    {
      title: "DevOps Training",
      description: "Learn modern DevOps practices, tools, and methodologies. Master continuous integration, delivery, and deployment for efficient software development.",
      duration: "12 weeks",
      rating: 4.8,
      students: 13500,
      keyPoints: [
        "Docker containerization",
        "Kubernetes orchestration",
        "CI/CD pipeline implementation",
        "Infrastructure as Code",
        "Monitoring and logging"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl font-bold text-gray-900 font-playfair mb-4">
            Professional Technology Courses
          </h1>
          <p className="text-lg text-gray-600 font-inter max-w-3xl mx-auto">
            Advance your career with our industry-leading courses. Learn from experts and
            gain practical experience in the most in-demand technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
