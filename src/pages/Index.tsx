
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu, X, Sun, Moon, Star, Clock, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import RestaurantCard from "@/components/RestaurantCard";

interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  image: string;
  isOpen: boolean;
}

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      return true;
    }
    return false;
  });
  const { getTotalItems } = useCart();

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

  const restaurants: Restaurant[] = [
    { id: 1, name: "Pizza Hut", cuisine: "Pizza", rating: 4.3, deliveryTime: "30-45 min", deliveryFee: "₹60", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop&q=80", isOpen: true },
    { id: 2, name: "McDonald's", cuisine: "Fast Food", rating: 4.1, deliveryTime: "20-35 min", deliveryFee: "₹50", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop&q=80", isOpen: true },
    { id: 3, name: "Domino's Pizza", cuisine: "Pizza", rating: 4.4, deliveryTime: "25-40 min", deliveryFee: "₹55", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&q=80", isOpen: true },
    { id: 4, name: "Papa John's", cuisine: "Pizza", rating: 4.2, deliveryTime: "30-45 min", deliveryFee: "₹65", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop&q=80", isOpen: true },
    { id: 5, name: "Chicago Pizza", cuisine: "Pizza", rating: 4.5, deliveryTime: "35-50 min", deliveryFee: "₹70", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&q=80", isOpen: true },
    { id: 6, name: "Burger King", cuisine: "Burgers", rating: 4.1, deliveryTime: "25-35 min", deliveryFee: "₹55", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop&q=80", isOpen: true },
    { id: 7, name: "Taco Bell", cuisine: "Mexican", rating: 3.9, deliveryTime: "30-45 min", deliveryFee: "₹65", image: "https://images.unsplash.com/photo-1565299585323-38174c4a6779?w=400&h=300&fit=crop&q=80", isOpen: true },
    { id: 8, name: "Starbucks", cuisine: "Coffee & Snacks", rating: 4.5, deliveryTime: "15-25 min", deliveryFee: "₹80", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop&q=80", isOpen: true },
    { id: 15, name: "Panda Express", cuisine: "Chinese", rating: 4.0, deliveryTime: "25-35 min", deliveryFee: "₹60", image: "https://images.unsplash.com/photo-1617196034796-73989e891b8e?w=400&h=300&fit=crop&q=80", isOpen: true },
    { id: 16, name: "China Garden", cuisine: "Chinese", rating: 4.2, deliveryTime: "30-45 min", deliveryFee: "₹55", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop&q=80", isOpen: true },
    { id: 20, name: "Spice Route", cuisine: "Indian", rating: 4.4, deliveryTime: "35-50 min", deliveryFee: "₹60", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&q=80", isOpen: true },
    { id: 24, name: "Biryani Paradise", cuisine: "Indian", rating: 4.5, deliveryTime: "25-40 min", deliveryFee: "₹60", image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&h=300&fit=crop&q=80", isOpen: true }
  ];

  const categories = ["All", "Pizza", "Burgers", "Chinese", "Indian", "Mexican", "Coffee & Snacks", "Fast Food"];

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || restaurant.cuisine === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-black text-white' : 'bg-gradient-to-br from-[rgb(249,243,239)] via-[rgb(210,193,182)] to-[rgb(249,243,239)] text-[rgb(27,60,83)]'}`}>
      {/* Header */}
      <header className={`backdrop-blur-md shadow-lg border-b sticky top-0 z-20 transition-colors duration-300 ${isDarkMode ? 'bg-black/80 border-gray-800' : 'bg-[rgb(249,243,239)]/80 border-[rgb(210,193,182)]'}`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center h-12 sm:h-14 md:h-16">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="bg-gradient-to-r from-[rgb(27,60,83)] to-[rgb(69,104,130)] p-1.5 sm:p-2 rounded-full">
                <span className="text-base sm:text-lg font-bold text-white">🍽️</span>
              </div>
              <h1 className={`text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[rgb(27,60,83)] to-[rgb(69,104,130)] bg-clip-text text-transparent ${isDarkMode ? 'text-white' : ''}`}>BiteBuddy</h1>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className={`h-7 w-7 sm:h-8 sm:w-8 p-0 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-[rgb(210,193,182)]'}`}
              >
                {isDarkMode ? <Sun className="h-4 w-4 text-white" /> : <Moon className="h-4 w-4 text-[rgb(69,104,130)]" />}
              </Button>
              
              <Link to="/cart">
                <Button className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-gradient-to-r from-[rgb(27,60,83)] to-[rgb(69,104,130)] hover:from-[rgb(69,104,130)] hover:to-[rgb(27,60,83)] text-white'}`}>
                  <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Cart ({getTotalItems()})</span>
                </Button>
              </Link>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className={`md:hidden h-7 w-7 p-0 ${isDarkMode ? 'text-white hover:bg-gray-800' : 'hover:bg-[rgb(210,193,182)]'}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className={`md:hidden border-b sticky top-12 sm:top-14 z-10 transition-colors duration-300 ${isDarkMode ? 'bg-black border-gray-800' : 'bg-[rgb(249,243,239)] border-[rgb(210,193,182)]'}`}>
          <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className={`text-sm ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-[rgb(69,104,130)] hover:text-[rgb(27,60,83)]'}`}>About</Link>
              <Link to="/contact" className={`text-sm ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-[rgb(69,104,130)] hover:text-[rgb(27,60,83)]'}`}>Contact</Link>
              <Link to="/help" className={`text-sm ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-[rgb(69,104,130)] hover:text-[rgb(27,60,83)]'}`}>Help</Link>
            </nav>
          </div>
        </div>
      )}

      {/* Search and Categories */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        <div className="mb-4 sm:mb-6 lg:mb-8">
          <div className="relative mb-4 sm:mb-6">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            <Input
              type="text"
              placeholder="Search restaurants or cuisines..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`pl-10 text-sm sm:text-base ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' : 'bg-white/80 border-[rgb(210,193,182)] placeholder-gray-500'}`}
            />
          </div>
          
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 ${
                  selectedCategory === category
                    ? isDarkMode 
                      ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                      : 'bg-gradient-to-r from-[rgb(27,60,83)] to-[rgb(69,104,130)] text-white'
                    : isDarkMode
                      ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                      : 'border-[rgb(210,193,182)] text-[rgb(69,104,130)] hover:bg-[rgb(210,193,182)]/20'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Restaurants Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {filteredRestaurants.map((restaurant, index) => (
            <RestaurantCard 
              key={restaurant.id} 
              restaurant={restaurant} 
              animationDelay={index * 100} 
            />
          ))}
        </div>

        {filteredRestaurants.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className={`text-base sm:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              No restaurants found matching your search.
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className={`border-t mt-8 sm:mt-12 lg:mt-16 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white/50 border-[rgb(210,193,182)]'}`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div>
              <h3 className={`font-semibold text-sm sm:text-base mb-2 sm:mb-3 ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>BiteBuddy</h3>
              <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Your favorite food, delivered fast</p>
            </div>
            <div>
              <h4 className={`font-medium text-sm mb-2 ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>Quick Links</h4>
              <div className="space-y-1 sm:space-y-2">
                <Link to="/about" className={`block text-xs sm:text-sm ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-[rgb(27,60,83)]'}`}>About Us</Link>
                <Link to="/contact" className={`block text-xs sm:text-sm ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-[rgb(27,60,83)]'}`}>Contact</Link>
                <Link to="/help" className={`block text-xs sm:text-sm ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-[rgb(27,60,83)]'}`}>Help</Link>
              </div>
            </div>
            <div>
              <h4 className={`font-medium text-sm mb-2 ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>Categories</h4>
              <div className="space-y-1 sm:space-y-2">
                {categories.slice(1, 5).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block text-xs sm:text-sm text-left ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-[rgb(27,60,83)]'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className={`font-medium text-sm mb-2 ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>Follow Us</h4>
              <div className="flex space-x-3 sm:space-x-4">
                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm ${isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-[rgb(210,193,182)] text-[rgb(69,104,130)]'}`}>f</div>
                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm ${isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-[rgb(210,193,182)] text-[rgb(69,104,130)]'}`}>t</div>
                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm ${isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-[rgb(210,193,182)] text-[rgb(69,104,130)]'}`}>i</div>
              </div>
            </div>
          </div>
          <div className={`border-t mt-4 sm:mt-6 pt-4 sm:pt-6 text-center ${isDarkMode ? 'border-gray-800' : 'border-[rgb(210,193,182)]'}`}>
            <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2024 BiteBuddy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
