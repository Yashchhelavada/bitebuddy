
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Sun, Moon, Search, Filter, Star, Clock, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";

const Category = () => {
  const { category } = useParams<{ category: string }>();
  const { getTotalItems } = useCart();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      return true;
    }
    return false;
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [cuisineFilter, setCuisineFilter] = useState("all");
  const [dietaryFilter, setDietaryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("rating");

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

  const getRestaurantsByCategory = (categoryName: string) => {
    const restaurantData = {
      pizza: [
        { id: 1, name: "Pizza Hut", cuisine: "Pizza", rating: 4.3, deliveryTime: "30-45 min", deliveryFee: "₹60", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop&q=80", isOpen: true, dietary: ["vegetarian", "non-vegetarian"] },
        { id: 3, name: "Domino's Pizza", cuisine: "Pizza", rating: 4.4, deliveryTime: "25-40 min", deliveryFee: "₹55", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&q=80", isOpen: true, dietary: ["vegetarian", "non-vegetarian"] },
        { id: 9, name: "Papa John's", cuisine: "Pizza", rating: 4.2, deliveryTime: "35-50 min", deliveryFee: "₹65", image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop&q=80", isOpen: true, dietary: ["vegetarian", "non-vegetarian"] },
        { id: 10, name: "Chicago Pizza", cuisine: "Pizza", rating: 4.1, deliveryTime: "30-40 min", deliveryFee: "₹70", image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=300&fit=crop&q=80", isOpen: true, dietary: ["vegetarian", "non-vegetarian"] }
      ],
      burgers: [
        { id: 2, name: "McDonald's", cuisine: "Fast Food", rating: 4.1, deliveryTime: "20-35 min", deliveryFee: "₹50", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop&q=80", isOpen: true, dietary: ["vegetarian", "non-vegetarian"] },
        { id: 6, name: "Burger King", cuisine: "Burgers", rating: 4.1, deliveryTime: "25-35 min", deliveryFee: "₹55", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop&q=80", isOpen: true, dietary: ["vegetarian", "non-vegetarian"] },
        { id: 12, name: "Hardee's", cuisine: "Burgers", rating: 4.0, deliveryTime: "30-40 min", deliveryFee: "₹60", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop&q=80", isOpen: true, dietary: ["vegetarian", "non-vegetarian"] },
        { id: 13, name: "Carl's Jr", cuisine: "Burgers", rating: 3.9, deliveryTime: "25-40 min", deliveryFee: "₹65", image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&h=300&fit=crop&q=80", isOpen: true, dietary: ["vegetarian", "non-vegetarian"] }
      ],
      chinese: [
        { id: 15, name: "Panda Express", cuisine: "Chinese", rating: 4.0, deliveryTime: "25-35 min", deliveryFee: "₹60", image: "https://images.unsplash.com/photo-1617196034796-73989e891b8e?w=400&h=300&fit=crop&q=80", isOpen: true, dietary: ["vegetarian", "non-vegetarian"] },
        { id: 16, name: "China Garden", cuisine: "Chinese", rating: 4.2, deliveryTime: "30-45 min", deliveryFee: "₹55", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop&q=80", isOpen: true, dietary: ["vegetarian", "non-vegetarian"] },
        { id: 17, name: "Golden Dragon", cuisine: "Chinese", rating: 4.1, deliveryTime: "35-50 min", deliveryFee: "₹70", image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&h=300&fit=crop&q=80", isOpen: true, dietary: ["vegetarian", "non-vegetarian"] },
        { id: 18, name: "Wok Express", cuisine: "Chinese", rating: 3.9, deliveryTime: "20-30 min", deliveryFee: "₹50", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop&q=80", isOpen: true, dietary: ["vegetarian", "non-vegetarian"] }
      ],
      indian: [
        { id: 20, name: "Spice Route", cuisine: "Indian", rating: 4.4, deliveryTime: "35-50 min", deliveryFee: "₹60", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&q=80", isOpen: true, dietary: ["vegetarian", "non-vegetarian"] },
        { id: 21, name: "Mughal Darbar", cuisine: "Indian", rating: 4.2, deliveryTime: "40-55 min", deliveryFee: "₹70", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop&q=80", isOpen: true, dietary: ["vegetarian", "non-vegetarian"] },
        { id: 22, name: "Tandoor Express", cuisine: "Indian", rating: 4.1, deliveryTime: "30-45 min", deliveryFee: "₹55", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop&q=80", isOpen: true, dietary: ["vegetarian", "non-vegetarian"] },
        { id: 24, name: "Biryani Paradise", cuisine: "Indian", rating: 4.5, deliveryTime: "25-40 min", deliveryFee: "₹60", image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&h=300&fit=crop&q=80", isOpen: true, dietary: ["vegetarian", "non-vegetarian"] }
      ],
      coffee: [
        { id: 8, name: "Starbucks", cuisine: "Coffee & Snacks", rating: 4.5, deliveryTime: "15-25 min", deliveryFee: "₹80", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop&q=80", isOpen: true, dietary: ["vegetarian", "vegan"] },
        { id: 25, name: "Costa Coffee", cuisine: "Coffee", rating: 4.3, deliveryTime: "20-30 min", deliveryFee: "₹75", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop&q=80", isOpen: true, dietary: ["vegetarian", "vegan"] },
        { id: 26, name: "Cafe Coffee Day", cuisine: "Coffee", rating: 4.0, deliveryTime: "15-25 min", deliveryFee: "₹60", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&q=80", isOpen: true, dietary: ["vegetarian", "vegan"] },
        { id: 27, name: "Blue Tokai", cuisine: "Coffee", rating: 4.4, deliveryTime: "20-35 min", deliveryFee: "₹85", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop&q=80", isOpen: true, dietary: ["vegetarian", "vegan"] }
      ],
      desserts: [
        { id: 29, name: "Baskin Robbins", cuisine: "Ice Cream", rating: 4.3, deliveryTime: "20-30 min", deliveryFee: "₹60", image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&h=300&fit=crop&q=80", isOpen: true, dietary: ["vegetarian"] },
        { id: 30, name: "Cake Studio", cuisine: "Desserts", rating: 4.2, deliveryTime: "30-45 min", deliveryFee: "₹70", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&q=80", isOpen: true, dietary: ["vegetarian"] },
        { id: 31, name: "Sweet Treats", cuisine: "Desserts", rating: 4.1, deliveryTime: "25-40 min", deliveryFee: "₹55", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&q=80", isOpen: true, dietary: ["vegetarian"] },
        { id: 32, name: "Gelato Junction", cuisine: "Ice Cream", rating: 4.4, deliveryTime: "15-25 min", deliveryFee: "₹65", image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=400&h=300&fit=crop&q=80", isOpen: true, dietary: ["vegetarian"] }
      ]
    };
    
    return restaurantData[categoryName as keyof typeof restaurantData] || [];
  };

  const restaurants = getRestaurantsByCategory(category || "");
  const categoryTitle = category ? category.charAt(0).toUpperCase() + category.slice(1) : "Category";

  // Filter restaurants based on search and filters
  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCuisine = cuisineFilter === "all" || restaurant.cuisine.toLowerCase().includes(cuisineFilter.toLowerCase());
    const matchesDietary = dietaryFilter === "all" || restaurant.dietary.includes(dietaryFilter);
    
    return matchesSearch && matchesCuisine && matchesDietary;
  });

  // Sort restaurants
  const sortedRestaurants = [...filteredRestaurants].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "deliveryTime":
        return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
      case "deliveryFee":
        return parseInt(a.deliveryFee.replace('₹', '')) - parseInt(b.deliveryFee.replace('₹', ''));
      default:
        return 0;
    }
  });

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
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className={`h-8 w-8 p-0 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-[rgb(210,193,182)]'}`}
              >
                {isDarkMode ? <Sun className="h-4 w-4 text-white" /> : <Moon className="h-4 w-4 text-[rgb(69,104,130)]" />}
              </Button>
              <Link to="/cart">
                <Button className={`${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-[rgb(69,104,130)] text-white hover:bg-[rgb(27,60,83)]'}`} size="sm">
                  Cart ({getTotalItems()})
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Category Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>
            {categoryTitle} Restaurants
          </h1>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-[rgb(69,104,130)]'}`}>
            Discover the best {categoryTitle.toLowerCase()} places in Ahmedabad
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <Input
                placeholder="Search restaurants or cuisines..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`pl-10 ${isDarkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-[rgb(210,193,182)]'}`}
              />
            </div>
            <div className="flex gap-2">
              <Select value={cuisineFilter} onValueChange={setCuisineFilter}>
                <SelectTrigger className={`w-[150px] ${isDarkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-[rgb(210,193,182)]'}`}>
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Cuisine" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cuisines</SelectItem>
                  <SelectItem value="pizza">Pizza</SelectItem>
                  <SelectItem value="chinese">Chinese</SelectItem>
                  <SelectItem value="indian">Indian</SelectItem>
                  <SelectItem value="burgers">Burgers</SelectItem>
                  <SelectItem value="coffee">Coffee</SelectItem>
                  <SelectItem value="desserts">Desserts</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={dietaryFilter} onValueChange={setDietaryFilter}>
                <SelectTrigger className={`w-[150px] ${isDarkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-[rgb(210,193,182)]'}`}>
                  <SelectValue placeholder="Dietary" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="vegetarian">Vegetarian</SelectItem>
                  <SelectItem value="vegan">Vegan</SelectItem>
                  <SelectItem value="non-vegetarian">Non-Vegetarian</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className={`w-[150px] ${isDarkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-[rgb(210,193,182)]'}`}>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="deliveryTime">Delivery Time</SelectItem>
                  <SelectItem value="deliveryFee">Delivery Fee</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedRestaurants.map((restaurant, index) => (
            <Link key={restaurant.id} to={`/restaurant/${restaurant.id}`}>
              <Card className={`overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer animate-fade-in ${isDarkMode ? 'bg-gray-900 border-gray-700 hover:border-gray-600' : 'bg-white border-[rgb(210,193,182)] hover:border-[rgb(69,104,130)]'}`} style={{animationDelay: `${index * 150}ms`}}>
                <div className="relative">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      const fallbackImages = {
                        'pizza': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop&q=80',
                        'chinese': 'https://images.unsplash.com/photo-1617196034796-73989e891b8e?w=400&h=300&fit=crop&q=80',
                        'indian': 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&q=80',
                        'burgers': 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop&q=80',
                        'coffee': 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop&q=80',
                        'desserts': 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&h=300&fit=crop&q=80'
                      };
                      e.currentTarget.src = fallbackImages[category as keyof typeof fallbackImages] || 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&q=80';
                    }}
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className={`${restaurant.isOpen ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                      {restaurant.isOpen ? 'Open' : 'Closed'}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {restaurant.name}
                  </h3>
                  <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {restaurant.cuisine}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{restaurant.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className={`h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                      <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{restaurant.deliveryTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Truck className={`h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                      <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{restaurant.deliveryFee}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {restaurant.dietary.map((diet) => (
                      <Badge key={diet} variant="outline" className={`text-xs ${isDarkMode ? 'border-gray-600 text-gray-300' : 'border-[rgb(210,193,182)] text-[rgb(69,104,130)]'}`}>
                        {diet}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {sortedRestaurants.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-[rgb(69,104,130)]'}`}>
              No restaurants found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
