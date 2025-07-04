
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Users, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-gray-900 dark:via-purple-950 dark:to-black transition-colors duration-300">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md dark:bg-black/80 shadow-lg border-b border-purple-200 dark:border-purple-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-purple-600 hover:bg-purple-100 dark:hover:bg-purple-900">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back</span>
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="text-2xl">🍽️</div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">BiteBuddy</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-purple-700 to-black text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About BiteBuddy</h1>
          <p className="text-xl opacity-90">
            Connecting food lovers with their favorite meals since 2024
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Our Story */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              BiteBuddy was born from a simple idea: food ordering should be as delightful as the food itself. 
              We believe that great meals bring people together, and technology should make that connection seamless.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose BiteBuddy?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-colors duration-300">
              <CardContent className="p-0">
                <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Fast Delivery</h3>
                <p className="text-gray-600 dark:text-gray-300">Quick and reliable delivery to your doorstep</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-colors duration-300">
              <CardContent className="p-0">
                <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Wide Selection</h3>
                <p className="text-gray-600 dark:text-gray-300">Hundreds of restaurants and cuisines to choose from</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-colors duration-300">
              <CardContent className="p-0">
                <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Secure Payments</h3>
                <p className="text-gray-600 dark:text-gray-300">Safe and secure payment processing</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-colors duration-300">
              <CardContent className="p-0">
                <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Made with Love</h3>
                <p className="text-gray-600 dark:text-gray-300">Every order is handled with care and attention</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Mission */}
        <section className="text-center bg-white/50 dark:bg-black/20 rounded-lg p-8 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            To revolutionize food delivery by creating meaningful connections between restaurants, delivery partners, 
            and customers. We're committed to supporting local businesses while providing exceptional service that 
            brings joy to every meal.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
