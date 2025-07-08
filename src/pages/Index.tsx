
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
  const [showSearchResults, setShowSearchResults] = useState(false);

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
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      isOpen: true
    },
    {
      id: 2,
      name: "McDonald's",
      cuisine: "Fast Food",
      rating: 4.1,
      deliveryTime: "20-35 min",
      deliveryFee: "₹50",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
      isOpen: true
    },
    {
      id: 3,
      name: "Domino's Pizza",
      cuisine: "Pizza",
      rating: 4.4,
      deliveryTime: "25-40 min",
      deliveryFee: "₹55",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
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
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop",
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

  const filteredRestaurants = featuredRestaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowSearchResults(e.target.value.length > 0);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-black text-white' : 'bg-gradient-to-br from-[rgb(249,243,239)] via-[rgb(210,193,182)] to-[rgb(249,243,239)] text-[rgb(27,60,83)]'}`}>
      {/* Header */}
      <header className={`backdrop-blur-md shadow-lg border-b transition-colors duration-300 ${isDarkMode ? 'bg-black/90 border-gray-800' : 'bg-[rgb(249,243,239)]/90 border-[rgb(210,193,182)]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-[rgb(27,60,83)] to-[rgb(69,104,130)] p-2 rounded-full">
                <span className="text-2xl font-bold text-white">🍽️</span>
              </div>
              <span className={`text-xl font-bold bg-gradient-to-r from-[rgb(27,60,83)] to-[rgb(69,104,130)] bg-clip-text text-transparent ${isDarkMode ? 'text-white' : ''}`}>BiteBuddy</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className={`flex items-center space-x-1 text-sm ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>
                <MapPin className="h-4 w-4 text-[rgb(69,104,130)]" />
                <span>Ahmedabad, Gujarat</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className={`h-8 w-8 p-0 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-[rgb(210,193,182)]'}`}
              >
                {isDarkMode ? <Sun className="h-4 w-4 text-white" /> : <Moon className="h-4 w-4 text-[rgb(69,104,130)]" />}
              </Button>
              <Link to="/about">
                <Button variant="ghost" size="sm" className={`${isDarkMode ? 'text-white hover:bg-gray-800' : 'text-[rgb(69,104,130)] hover:bg-[rgb(210,193,182)]'}`}>
                  About Us
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="ghost" size="sm" className={`${isDarkMode ? 'text-white hover:bg-gray-800' : 'text-[rgb(69,104,130)] hover:bg-[rgb(210,193,182)]'}`}>
                  Contact
                </Button>
              </Link>
              <Link to="/help">
                <Button variant="ghost" size="sm" className={`${isDarkMode ? 'text-white hover:bg-gray-800' : 'text-[rgb(69,104,130)] hover:bg-[rgb(210,193,182)]'}`}>
                  Help
                </Button>
              </Link>
              <Link to="/signup">
                <Button className={`${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-[rgb(69,104,130)] text-white hover:bg-[rgb(27,60,83)]'}`} size="sm">
                  Sign Up
                </Button>
              </Link>
              <Link to="/cart">
                <Button className={`${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-[rgb(69,104,130)] text-white hover:bg-[rgb(27,60,83)]'}`} size="sm">
                  Cart (0)
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Food Collage Background */}
      <section className="relative food-collage-bg text-white py-20">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
              Welcome, hungry soul! 🍜
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 opacity-90 animate-fade-in px-4">
              Let's get you something delicious — real-time, hot, and just a few taps away.
            </p>
            <div className="max-w-xs sm:max-w-md mx-auto relative animate-scale-in px-4 sm:px-0">
              <Search className="absolute left-6 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
              <Input
                placeholder="Tell us your cravings — spicy, sweet, or something in between? 🌶️🍩"
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-12 sm:pl-10 py-4 sm:py-6 text-base sm:text-lg bg-white text-gray-900 border-0 shadow-lg"
              />
              {showSearchResults && (
                <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                  {filteredRestaurants.length > 0 ? (
                    filteredRestaurants.map((restaurant) => (
                      <Link
                        key={restaurant.id}
                        to={`/restaurant/${restaurant.id}`}
                        className="block p-3 hover:bg-gray-100 border-b border-gray-200 last:border-b-0"
                        onClick={() => setShowSearchResults(false)}
                      >
                        <div className="flex items-center space-x-3">
                          <img src={restaurant.image} alt={restaurant.name} className="w-10 h-10 rounded object-cover" />
                          <div>
                            <p className="font-medium text-gray-900">{restaurant.name}</p>
                            <p className="text-sm text-gray-600">{restaurant.cuisine}</p>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="p-3 text-gray-600">No restaurants found</div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>Browse by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {categories.map((category, index) => (
              <Link key={category.name} to={`/category/${category.name.toLowerCase()}`}>
                <Card className={`hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 animate-fade-in border-[rgb(210,193,182)] hover:border-[rgb(69,104,130)] ${isDarkMode ? 'bg-gray-900 border-gray-700 hover:border-white' : 'bg-[rgb(249,243,239)]'}`} style={{animationDelay: `${index * 100}ms`}}>
                  <CardContent className="p-3 sm:p-4 md:p-6 text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2">{category.icon}</div>
                    <h3 className={`font-semibold text-sm sm:text-base ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>{category.name}</h3>
                    <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-[rgb(69,104,130)]'}`}>{category.count} places</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className={`py-12 backdrop-blur-sm transition-colors duration-300 ${isDarkMode ? 'bg-gray-900/50' : 'bg-[rgb(249,243,239)]/50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>Featured Restaurants</h2>
            <Button variant="outline" className={`flex items-center space-x-2 ${isDarkMode ? 'border-white text-white hover:bg-gray-800' : 'border-[rgb(69,104,130)] text-[rgb(69,104,130)] hover:bg-[rgb(210,193,182)]'}`}>
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
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
      <section className={`py-16 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-[rgb(210,193,182)] to-[rgb(249,243,239)]'}`}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            <CreditCard className={`h-16 w-16 ${isDarkMode ? 'text-white' : 'text-[rgb(69,104,130)]'}`} />
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>
            Secure & Fast Payments
          </h2>
          <p className={`text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-[rgb(69,104,130)]'}`}>
            Pay with confidence using our secure payment gateway. Multiple payment options available.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 px-4">
            <Badge variant="outline" className={`text-sm sm:text-lg py-1 sm:py-2 px-2 sm:px-4 ${isDarkMode ? 'border-white text-white' : 'border-[rgb(69,104,130)] text-[rgb(69,104,130)]'}`}>💳 Credit/Debit Cards</Badge>
            <Badge variant="outline" className={`text-sm sm:text-lg py-1 sm:py-2 px-2 sm:px-4 ${isDarkMode ? 'border-white text-white' : 'border-[rgb(69,104,130)] text-[rgb(69,104,130)]'}`}>📱 UPI</Badge>
            <Badge variant="outline" className={`text-sm sm:text-lg py-1 sm:py-2 px-2 sm:px-4 ${isDarkMode ? 'border-white text-white' : 'border-[rgb(69,104,130)] text-[rgb(69,104,130)]'}`}>💰 Net Banking</Badge>
            <Badge variant="outline" className={`text-sm sm:text-lg py-1 sm:py-2 px-2 sm:px-4 ${isDarkMode ? 'border-white text-white' : 'border-[rgb(69,104,130)] text-[rgb(69,104,130)]'}`}>🏦 Wallets</Badge>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[rgb(27,60,83)] via-[rgb(69,104,130)] to-[rgb(27,60,83)] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            No queues. No calls. Just food, fast & fresh — like magic! ✨
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We track it all, from 'cooking' to 'knocking on your door'. Ready to dig in? 🍔🚀
          </p>
          <Button size="lg" className="bg-white text-[rgb(27,60,83)] hover:bg-[rgb(249,243,239)] px-8 py-3 text-lg font-semibold">
            Start Ordering Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-[rgb(27,60,83)]'} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-[rgb(69,104,130)] to-[rgb(210,193,182)] p-2 rounded-full">
                  <span className="text-xl font-bold text-[rgb(27,60,83)]">🍽️</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-[rgb(210,193,182)] to-[rgb(249,243,239)] bg-clip-text text-transparent">BiteBuddy</span>
              </div>
              <p className="text-[rgb(210,193,182)]">Delivering happiness, one meal at a time.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-[rgb(210,193,182)]">Quick Links</h3>
              <ul className="space-y-2 text-[rgb(210,193,182)]">
                <li><Link to="/about" className="hover:text-[rgb(249,243,239)] transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-[rgb(249,243,239)] transition-colors">Contact</Link></li>
                <li><Link to="/help" className="hover:text-[rgb(249,243,239)] transition-colors">Help</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-[rgb(210,193,182)]">For Restaurants</h3>
              <ul className="space-y-2 text-[rgb(210,193,182)]">
                <li><a href="#" className="hover:text-[rgb(249,243,239)] transition-colors">Partner with us</a></li>
                <li><a href="#" className="hover:text-[rgb(249,243,239)] transition-colors">Restaurant Portal</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-[rgb(210,193,182)]">Download App</h3>
              <p className="text-[rgb(210,193,182)] mb-4">Get the best experience</p>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start bg-black text-white border-black hover:bg-gray-800">
                  📱 iOS App
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start bg-black text-white border-black hover:bg-gray-800">
                  📱 Android App
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-[rgb(69,104,130)] mt-8 pt-8 text-center text-[rgb(210,193,182)]">
            <p>&copy; 2024 BiteBuddy. Made with ❤️ for food lovers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
