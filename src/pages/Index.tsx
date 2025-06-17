
import { useState } from "react";
import { Search, MapPin, Clock, Star, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import RestaurantCard from "@/components/RestaurantCard";
import { Link } from "react-router-dom";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const featuredRestaurants = [
    {
      id: 1,
      name: "Bella Italia",
      cuisine: "Italian",
      rating: 4.8,
      deliveryTime: "25-35 min",
      deliveryFee: "$2.99",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      isOpen: true
    },
    {
      id: 2,
      name: "Dragon Wok",
      cuisine: "Chinese",
      rating: 4.6,
      deliveryTime: "30-40 min",
      deliveryFee: "$1.99",
      image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=400&h=300&fit=crop",
      isOpen: true
    },
    {
      id: 3,
      name: "Burger Palace",
      cuisine: "American",
      rating: 4.7,
      deliveryTime: "20-30 min",
      deliveryFee: "$3.49",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
      isOpen: true
    },
    {
      id: 4,
      name: "Tokyo Sushi",
      cuisine: "Japanese",
      rating: 4.9,
      deliveryTime: "35-45 min",
      deliveryFee: "$2.49",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
      isOpen: false
    }
  ];

  const categories = [
    { name: "Pizza", icon: "🍕", count: 12 },
    { name: "Burgers", icon: "🍔", count: 8 },
    { name: "Sushi", icon: "🍣", count: 6 },
    { name: "Italian", icon: "🍝", count: 15 },
    { name: "Chinese", icon: "🥡", count: 10 },
    { name: "Desserts", icon: "🍰", count: 7 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-orange-600">🍽️</div>
              <span className="text-xl font-bold text-gray-900">FoodieExpress</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-sm text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>New York, NY</span>
              </div>
              <Link to="/cart">
                <Button variant="outline" size="sm">
                  Cart (0)
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              Welcome, hungry soul! 🍜
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
              Let's get you something delicious — real-time, hot, and just a few taps away.
            </p>
            <div className="max-w-md mx-auto relative animate-scale-in">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Tell us your cravings — spicy, sweet, or something in between? 🌶️🍩"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 text-lg bg-white text-gray-900 border-0 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Card key={category.name} className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h3 className="font-semibold text-gray-900">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} places</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Restaurants</h2>
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredRestaurants.map((restaurant, index) => (
              <RestaurantCard 
                key={restaurant.id} 
                restaurant={restaurant} 
                animationDelay={index * 150}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            No queues. No calls. Just food, fast & fresh — like magic! ✨
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We track it all, from 'cooking' to 'knocking on your door'. Ready to dig in? 🍔🚀
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            Start Ordering Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl">🍽️</div>
                <span className="text-xl font-bold">FoodieExpress</span>
              </div>
              <p className="text-gray-400">Delivering happiness, one meal at a time.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Restaurants</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Partner with us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Restaurant Portal</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Download App</h3>
              <p className="text-gray-400 mb-4">Get the best experience</p>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  📱 iOS App
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  📱 Android App
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FoodieExpress. Made with ❤️ for food lovers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
