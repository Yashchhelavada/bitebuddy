import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Clock, Truck, Plus, Minus, ShoppingCart, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { getRestaurantMenu } from "@/data/restaurantMenus";

const Restaurant = () => {
  const { id } = useParams<{ id: string }>();
  const [cart, setCart] = useState<{[key: number]: number}>({});
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

  // Restaurant data with proper Indian pricing
  const getRestaurantData = (restaurantId: number) => {
    const restaurants = {
      1: { id: 1, name: "Pizza Hut", cuisine: "Pizza", rating: 4.3, deliveryTime: "30-45 min", deliveryFee: "₹60", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=400&fit=crop", description: "World's favorite pizza place with authentic Italian taste and fresh ingredients.", isOpen: true },
      2: { id: 2, name: "McDonald's", cuisine: "Fast Food", rating: 4.1, deliveryTime: "20-35 min", deliveryFee: "₹50", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=400&fit=crop", description: "I'm Lovin' It! The world's leading fast-food chain with burgers, fries, and more.", isOpen: true },
      3: { id: 3, name: "Domino's Pizza", cuisine: "Pizza", rating: 4.4, deliveryTime: "25-40 min", deliveryFee: "₹55", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=400&fit=crop", description: "OH YES WE DID! Fresh pizza delivered hot in 30 minutes or less.", isOpen: true },
      6: { id: 6, name: "Burger King", cuisine: "Burgers", rating: 4.1, deliveryTime: "25-35 min", deliveryFee: "₹55", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&h=400&fit=crop", description: "Have It Your Way! Flame-grilled burgers made just how you like them.", isOpen: true },
      7: { id: 7, name: "Taco Bell", cuisine: "Mexican", rating: 3.9, deliveryTime: "30-45 min", deliveryFee: "₹65", image: "https://images.unsplash.com/photo-1565299585323-38174c4a6779?w=800&h=400&fit=crop", description: "Live Más! Experience bold Mexican flavors with our tacos, burritos, and more.", isOpen: true },
      8: { id: 8, name: "Starbucks", cuisine: "Coffee & Snacks", rating: 4.5, deliveryTime: "15-25 min", deliveryFee: "₹80", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=400&fit=crop", description: "Premium coffee, handcrafted beverages, and delicious pastries.", isOpen: true },
      15: { id: 15, name: "Panda Express", cuisine: "Chinese", rating: 4.0, deliveryTime: "25-35 min", deliveryFee: "₹60", image: "https://images.unsplash.com/photo-1617196034796-73989e891b8e?w=800&h=400&fit=crop", description: "Fresh, fast Chinese food made with the highest quality ingredients.", isOpen: true },
      16: { id: 16, name: "China Garden", cuisine: "Chinese", rating: 4.2, deliveryTime: "30-45 min", deliveryFee: "₹55", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&h=400&fit=crop", description: "Authentic Chinese cuisine with traditional flavors and modern presentation.", isOpen: true },
      20: { id: 20, name: "Spice Route", cuisine: "Indian", rating: 4.4, deliveryTime: "35-50 min", deliveryFee: "₹60", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&h=400&fit=crop", description: "Authentic Indian flavors with aromatic spices and traditional recipes.", isOpen: true },
      24: { id: 24, name: "Biryani Paradise", cuisine: "Indian", rating: 4.5, deliveryTime: "25-40 min", deliveryFee: "₹60", image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=800&h=400&fit=crop", description: "Home of the finest biryanis with authentic Hyderabadi flavors.", isOpen: true }
    };
    return restaurants[restaurantId as keyof typeof restaurants] || restaurants[1];
  };

  const restaurant = getRestaurantData(parseInt(id!));
  const restaurantMenu = getRestaurantMenu(parseInt(id!));
  const menuItems = restaurantMenu.items;
  const categories = [...new Set(menuItems.map(item => item.category))];

  const addToCart = (itemId: number) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
    const item = menuItems.find(i => i.id === itemId);
    toast({
      title: "Added to cart! 🛒",
      description: `${item?.name} added to your cart`,
      duration: 2000,
    });
  };

  const removeFromCart = (itemId: number) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId] -= 1;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0);
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
                <Button className={`flex items-center space-x-2 ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-gradient-to-r from-[rgb(27,60,83)] to-[rgb(69,104,130)] hover:from-[rgb(69,104,130)] hover:to-[rgb(27,60,83)] text-white'}`}>
                  <ShoppingCart className="h-4 w-4" />
                  <span>Cart ({getTotalItems()})</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Restaurant Hero */}
      <div className="relative h-64 md:h-80">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{restaurant.name}</h1>
            <p className="text-lg opacity-90 mb-4">{restaurant.description}</p>
            <div className="flex flex-wrap items-center gap-4">
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                {restaurant.rating}
              </Badge>
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                <Clock className="h-3 w-3 mr-1" />
                {restaurant.deliveryTime}
              </Badge>
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                <Truck className="h-3 w-3 mr-1" />
                {restaurant.deliveryFee}
              </Badge>
              <Badge className={`backdrop-blur-sm text-white border-purple-400/50 ${isDarkMode ? 'bg-purple-900/80' : 'bg-purple-600/80'}`}>
                {restaurant.cuisine}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Menu Categories</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="ghost"
                    className={`w-full justify-start ${isDarkMode ? 'hover:bg-purple-900 text-gray-300 hover:text-white' : 'hover:bg-purple-50 hover:text-purple-600'}`}
                    onClick={() => {
                      const element = document.getElementById(category);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="lg:col-span-3">
            {categories.map((category) => (
              <div key={category} id={category} className="mb-12">
                <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {menuItems
                    .filter(item => item.category === category)
                    .map((item, index) => (
                      <Card key={item.id} className={`overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in border-purple-200 hover:border-purple-400 ${isDarkMode ? 'bg-gray-900 border-gray-700 hover:border-purple-600' : 'bg-white'}`} style={{animationDelay: `${index * 100}ms`}}>
                        <div className="flex">
                          <div className="flex-1 p-4">
                            <div className="flex items-start justify-between mb-2">
                              <CardTitle className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                {item.name}
                                {item.popular && (
                                  <Badge className={`ml-2 ${isDarkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'}`}>
                                    🔥 Popular
                                  </Badge>
                                )}
                              </CardTitle>
                            </div>
                            <p className={`text-sm mb-3 line-clamp-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                              {item.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className={`text-xl font-bold ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                                ₹{item.price}
                              </span>
                              <div className="flex items-center space-x-2">
                                {cart[item.id] && (
                                  <>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => removeFromCart(item.id)}
                                      className={`h-8 w-8 p-0 border-purple-300 text-purple-600 hover:bg-purple-50 ${isDarkMode ? 'border-purple-600 text-purple-400 hover:bg-purple-900' : ''}`}
                                    >
                                      <Minus className="h-3 w-3" />
                                    </Button>
                                    <span className={`text-sm font-medium min-w-[20px] text-center ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                                      {cart[item.id]}
                                    </span>
                                  </>
                                )}
                                <Button
                                  size="sm"
                                  onClick={() => addToCart(item.id)}
                                  className="h-8 w-8 p-0 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900"
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div className="w-24 h-24 m-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className={`w-full h-full object-cover rounded-lg border-2 ${isDarkMode ? 'border-purple-800' : 'border-purple-200'}`}
                            />
                          </div>
                        </div>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
