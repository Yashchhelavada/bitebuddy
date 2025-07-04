
import { useState, useEffect } from "react";
import { Search, MapPin, Clock, Star, Filter, Sun, Moon, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import RestaurantCard from "@/components/RestaurantCard";
import { Link } from "react-router-dom";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

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

  const featuredRestaurants = [
    {
      id: 1,
      name: "Pizza Hut",
      cuisine: "Pizza",
      rating: 4.3,
      deliveryTime: "30-45 min",
      deliveryFee: "₹60",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
      isOpen: true
    },
    {
      id: 2,
      name: "McDonald's",
      cuisine: "Fast Food",
      rating: 4.1,
      deliveryTime: "20-35 min",
      deliveryFee: "₹50",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
      isOpen: true
    },
    {
      id: 3,
      name: "Domino's Pizza",
      cuisine: "Pizza",
      rating: 4.4,
      deliveryTime: "25-40 min",
      deliveryFee: "₹55",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      isOpen: true
    },
    {
      id: 4,
      name: "KFC",
      cuisine: "Fried Chicken",
      rating: 4.2,
      deliveryTime: "25-40 min",
      deliveryFee: "₹70",
      image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop",
      isOpen: true
    },
    {
      id: 5,
      name: "Subway",
      cuisine: "Sandwiches",
      rating: 4.0,
      deliveryTime: "20-30 min",
      deliveryFee: "₹45",
      image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=400&h=300&fit=crop",
      isOpen: true
    },
    {
      id: 6,
      name: "Burger King",
      cuisine: "Burgers",
      rating: 4.1,
      deliveryTime: "25-35 min",
      deliveryFee: "₹55",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
      isOpen: true
    },
    {
      id: 7,
      name: "Taco Bell",
      cuisine: "Mexican",
      rating: 3.9,
      deliveryTime: "30-45 min",
      deliveryFee: "₹65",
      image: "https://images.unsplash.com/photo-1565299585323-38174c4a6779?w=400&h=300&fit=crop",
      isOpen: true
    },
    {
      id: 8,
      name: "Starbucks",
      cuisine: "Coffee & Snacks",
      rating: 4.5,
      deliveryTime: "15-25 min",
      deliveryFee: "₹80",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop",
      isOpen: false
    }
  ];

  const categories = [
    { name: "Pizza", icon: "🍕", count: 12 },
    { name: "Burgers", icon: "🍔", count: 8 },
    { name: "Chinese", icon: "🥡", count: 10 },
    { name: "Indian", icon: "🍛", count: 15 },
    { name: "Coffee", icon: "☕", count: 6 },
    { name: "Desserts", icon: "🍰", count: 7 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-gray-900 dark:via-purple-950 dark:to-black transition-colors duration-300">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md dark:bg-black/80 shadow-lg border-b border-purple-200 dark:border-purple-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-purple-600">🍽️</div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">BiteBuddy</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300">
                <MapPin className="h-4 w-4 text-purple-600" />
                <span>Ahmedabad, Gujarat</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="h-8 w-8 p-0 hover:bg-purple-100 dark:hover:bg-purple-900"
              >
                {isDarkMode ? <Sun className="h-4 w-4 text-purple-600" /> : <Moon className="h-4 w-4 text-purple-600" />}
              </Button>
              <Link to="/about">
                <Button variant="ghost" size="sm" className="text-purple-600 hover:bg-purple-100 dark:hover:bg-purple-900">
                  About Us
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="ghost" size="sm" className="text-purple-600 hover:bg-purple-100 dark:hover:bg-purple-900">
                  Contact
                </Button>
              </Link>
              <Link to="/help">
                <Button variant="ghost" size="sm" className="text-purple-600 hover:bg-purple-100 dark:hover:bg-purple-900">
                  Help
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline" size="sm" className="border-purple-300 text-purple-600 hover:bg-purple-50 dark:border-purple-600 dark:text-purple-400 dark:hover:bg-purple-900">
                  Sign Up
                </Button>
              </Link>
              <Link to="/cart">
                <Button variant="outline" size="sm" className="border-purple-300 text-purple-600 hover:bg-purple-50 dark:border-purple-600 dark:text-purple-400 dark:hover:bg-purple-900">
                  Cart (0)
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 via-purple-700 to-black text-white py-20">
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
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Link key={category.name} to={`/category/${category.name.toLowerCase()}`}>
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 animate-fade-in dark:bg-gray-800 border-purple-200 dark:border-purple-800 hover:border-purple-400" style={{animationDelay: `${index * 100}ms`}}>
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-2">{category.icon}</div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{category.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{category.count} places</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-12 bg-white/50 dark:bg-black/50 backdrop-blur-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Restaurants</h2>
            <Button variant="outline" className="flex items-center space-x-2 border-purple-300 text-purple-600 hover:bg-purple-50 dark:border-purple-600 dark:text-purple-400 dark:hover:bg-purple-900">
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

      {/* Payment Gateway Section */}
      <section className="py-16 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-950 dark:to-black transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            <CreditCard className="h-16 w-16 text-purple-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Secure & Fast Payments
          </h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
            Pay with confidence using our secure payment gateway. Multiple payment options available.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="outline" className="text-lg py-2 px-4 border-purple-300 text-purple-600 dark:border-purple-600 dark:text-purple-400">💳 Credit/Debit Cards</Badge>
            <Badge variant="outline" className="text-lg py-2 px-4 border-purple-300 text-purple-600 dark:border-purple-600 dark:text-purple-400">📱 UPI</Badge>
            <Badge variant="outline" className="text-lg py-2 px-4 border-purple-300 text-purple-600 dark:border-purple-600 dark:text-purple-400">💰 Net Banking</Badge>
            <Badge variant="outline" className="text-lg py-2 px-4 border-purple-300 text-purple-600 dark:border-purple-600 dark:text-purple-400">🏦 Wallets</Badge>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-purple-700 to-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            No queues. No calls. Just food, fast & fresh — like magic! ✨
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We track it all, from 'cooking' to 'knocking on your door'. Ready to dig in? 🍔🚀
          </p>
          <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 px-8 py-3 text-lg font-semibold">
            Start Ordering Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl">🍽️</div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">BiteBuddy</span>
              </div>
              <p className="text-gray-400">Delivering happiness, one meal at a time.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-purple-400">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-purple-400 transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-purple-400 transition-colors">Contact</Link></li>
                <li><Link to="/help" className="hover:text-purple-400 transition-colors">Help</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-purple-400">For Restaurants</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Partner with us</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Restaurant Portal</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-purple-400">Download App</h3>
              <p className="text-gray-400 mb-4">Get the best experience</p>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start border-purple-600 text-purple-400 hover:bg-purple-900">
                  📱 iOS App
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start border-purple-600 text-purple-400 hover:bg-purple-900">
                  📱 Android App
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-purple-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BiteBuddy. Made with ❤️ for food lovers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
