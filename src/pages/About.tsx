
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Sun, Moon, Users, Target, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      return true;
    }
    return false;
  });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-black text-white' : 'bg-gradient-to-br from-[rgb(249,243,239)] via-[rgb(210,193,182)] to-[rgb(249,243,239)] text-[rgb(27,60,83)]'}`}>
      {/* Header */}
      <header className={`backdrop-blur-md shadow-lg border-b sticky top-0 z-10 transition-colors duration-300 ${isDarkMode ? 'bg-black/80 border-gray-800' : 'bg-[rgb(249,243,239)]/80 border-[rgb(210,193,182)]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className={`flex items-center space-x-2 ${isDarkMode ? 'text-white hover:bg-gray-800' : 'text-[rgb(69,104,130)] hover:bg-[rgb(210,193,182)]'}`}>
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back</span>
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-[rgb(27,60,83)] to-[rgb(69,104,130)] p-2 rounded-full">
                  <span className="text-lg font-bold text-white">🍽️</span>
                </div>
                <span className={`text-xl font-bold bg-gradient-to-r from-[rgb(27,60,83)] to-[rgb(69,104,130)] bg-clip-text text-transparent ${isDarkMode ? 'text-white' : ''}`}>BiteBuddy</span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className={`h-8 w-8 p-0 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-[rgb(210,193,182)]'}`}
            >
              {isDarkMode ? <Sun className="h-4 w-4 text-white" /> : <Moon className="h-4 w-4 text-[rgb(69,104,130)]" />}
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>
            About BiteBuddy
          </h1>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-[rgb(69,104,130)]'}`}>
            Your trusted companion for delicious food delivery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className={`transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-[rgb(210,193,182)]'}`}>
            <CardHeader>
              <CardTitle className={`flex items-center space-x-2 ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>
                <Target className="h-5 w-5" />
                <span>Our Mission</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={isDarkMode ? 'text-gray-300' : 'text-[rgb(69,104,130)]'}>
                To connect food lovers with their favorite restaurants, making delicious meals just a click away. We believe everyone deserves great food delivered fresh and fast.
              </p>
            </CardContent>
          </Card>

          <Card className={`transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-[rgb(210,193,182)]'}`}>
            <CardHeader>
              <CardTitle className={`flex items-center space-x-2 ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>
                <Users className="h-5 w-5" />
                <span>Our Team</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={isDarkMode ? 'text-gray-300' : 'text-[rgb(69,104,130)]'}>
                We're a passionate team of food enthusiasts and tech experts working together to revolutionize food delivery in your city.
              </p>
            </CardContent>
          </Card>

          <Card className={`transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-[rgb(210,193,182)]'}`}>
            <CardHeader>
              <CardTitle className={`flex items-center space-x-2 ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>
                <Award className="h-5 w-5" />
                <span>Quality Promise</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={isDarkMode ? 'text-gray-300' : 'text-[rgb(69,104,130)]'}>
                We partner only with trusted restaurants and ensure every order meets our high standards for quality, freshness, and taste.
              </p>
            </CardContent>
          </Card>

          <Card className={`transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-[rgb(210,193,182)]'}`}>
            <CardHeader>
              <CardTitle className={`flex items-center space-x-2 ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>
                <Heart className="h-5 w-5" />
                <span>Community First</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={isDarkMode ? 'text-gray-300' : 'text-[rgb(69,104,130)]'}>
                Supporting local restaurants and creating jobs in our community while bringing people together through great food experiences.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>
            Join the BiteBuddy Family
          </h2>
          <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-[rgb(69,104,130)]'}`}>
            Ready to discover amazing food from the best restaurants in your area?
          </p>
          <Link to="/signup">
            <Button className="bg-gradient-to-r from-[rgb(27,60,83)] to-[rgb(69,104,130)] hover:from-[rgb(69,104,130)] hover:to-[rgb(27,60,83)] text-white px-8 py-3 text-lg">
              Get Started Today
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
