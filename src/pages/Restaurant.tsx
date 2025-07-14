import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Clock, Truck, Plus, Minus, ShoppingCart, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { getRestaurantMenu } from "@/data/restaurantMenus";
import { useCart } from "@/contexts/CartContext";

const Restaurant = () => {
  const { id } = useParams<{ id: string }>();
  const [cart, setCart] = useState<{[key: number]: number}>({});
  const { addToCart, getTotalItems } = useCart();
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

  // Restaurant data with high-quality images - Updated to include all restaurants
  const getRestaurantData = (restaurantId: number) => {
    const restaurants = {
      1: { id: 1, name: "Pizza Hut", cuisine: "Pizza", rating: 4.3, deliveryTime: "30-45 min", deliveryFee: "₹60", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=400&fit=crop&q=80", description: "World's favorite pizza place with authentic Italian taste and fresh ingredients.", isOpen: true },
      2: { id: 2, name: "McDonald's", cuisine: "Fast Food", rating: 4.1, deliveryTime: "20-35 min", deliveryFee: "₹50", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=400&fit=crop&q=80", description: "I'm Lovin' It! The world's leading fast-food chain with burgers, fries, and more.", isOpen: true },
      3: { id: 3, name: "Domino's Pizza", cuisine: "Pizza", rating: 4.4, deliveryTime: "25-40 min", deliveryFee: "₹55", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=400&fit=crop&q=80", description: "OH YES WE DID! Fresh pizza delivered hot in 30 minutes or less.", isOpen: true },
      4: { id: 4, name: "Papa John's", cuisine: "Pizza", rating: 4.2, deliveryTime: "30-45 min", deliveryFee: "₹65", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=400&fit=crop&q=80", description: "Better Ingredients. Better Pizza. Papa John's.", isOpen: true },
      5: { id: 5, name: "Chicago Pizza", cuisine: "Pizza", rating: 4.5, deliveryTime: "35-50 min", deliveryFee: "₹70", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=400&fit=crop&q=80", description: "Authentic Chicago deep-dish pizza with thick crust and loaded toppings.", isOpen: true },
      6: { id: 6, name: "Burger King", cuisine: "Burgers", rating: 4.1, deliveryTime: "25-35 min", deliveryFee: "₹55", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&h=400&fit=crop&q=80", description: "Have It Your Way! Flame-grilled burgers made just how you like them.", isOpen: true },
      7: { id: 7, name: "Taco Bell", cuisine: "Mexican", rating: 3.9, deliveryTime: "30-45 min", deliveryFee: "₹65", image: "https://images.unsplash.com/photo-1565299585323-38174c4a6779?w=800&h=400&fit=crop&q=80", description: "Live Más! Experience bold Mexican flavors with our tacos, burritos, and more.", isOpen: true },
      8: { id: 8, name: "Starbucks", cuisine: "Coffee & Snacks", rating: 4.5, deliveryTime: "15-25 min", deliveryFee: "₹80", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=400&fit=crop&q=80", description: "Premium coffee, handcrafted beverages, and delicious pastries.", isOpen: true },
      9: { id: 9, name: "Five Guys", cuisine: "Burgers", rating: 4.3, deliveryTime: "25-40 min", deliveryFee: "₹70", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=400&fit=crop&q=80", description: "Fresh, never frozen beef burgers and hand-cut fries.", isOpen: true },
      10: { id: 10, name: "Shake Shack", cuisine: "Burgers", rating: 4.4, deliveryTime: "30-45 min", deliveryFee: "₹75", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=400&fit=crop&q=80", description: "Modern day 'roadside' burger stand serving delicious burgers and shakes.", isOpen: true },
      11: { id: 11, name: "Chipotle", cuisine: "Mexican", rating: 4.2, deliveryTime: "25-40 min", deliveryFee: "₹70", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&h=400&fit=crop&q=80", description: "Food with integrity. Fresh Mexican grill with customizable bowls and burritos.", isOpen: true },
      12: { id: 12, name: "Qdoba", cuisine: "Mexican", rating: 4.0, deliveryTime: "30-45 min", deliveryFee: "₹65", image: "https://images.unsplash.com/photo-1571197119282-7c4b999c2382?w=800&h=400&fit=crop&q=80", description: "Mexican eats made fresh in front of you with bold flavors.", isOpen: true },
      13: { id: 13, name: "P.F. Chang's", cuisine: "Chinese", rating: 4.3, deliveryTime: "35-50 min", deliveryFee: "₹80", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&h=400&fit=crop&q=80", description: "Asian dining experience with handcrafted food and signature cocktails.", isOpen: true },
      14: { id: 14, name: "Pick Up Stix", cuisine: "Chinese", rating: 3.9, deliveryTime: "25-40 min", deliveryFee: "₹60", image: "https://images.unsplash.com/photo-1617196034796-73989e891b8e?w=800&h=400&fit=crop&q=80", description: "Fresh Asian kitchen with wok-smart cooking and bold flavors.", isOpen: true },
      15: { id: 15, name: "Panda Express", cuisine: "Chinese", rating: 4.0, deliveryTime: "25-35 min", deliveryFee: "₹60", image: "https://images.unsplash.com/photo-1617196034796-73989e891b8e?w=800&h=400&fit=crop&q=80", description: "Fresh, fast Chinese food made with the highest quality ingredients.", isOpen: true },
      16: { id: 16, name: "China Garden", cuisine: "Chinese", rating: 4.2, deliveryTime: "30-45 min", deliveryFee: "₹55", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&h=400&fit=crop&q=80", description: "Authentic Chinese cuisine with traditional flavors and modern presentation.", isOpen: true },
      17: { id: 17, name: "Tandoor Palace", cuisine: "Indian", rating: 4.3, deliveryTime: "30-45 min", deliveryFee: "₹65", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&h=400&fit=crop&q=80", description: "Royal Indian cuisine with authentic tandoor cooking and rich flavors.", isOpen: true },
      18: { id: 18, name: "Curry Express", cuisine: "Indian", rating: 4.1, deliveryTime: "25-40 min", deliveryFee: "₹55", image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=400&fit=crop&q=80", description: "Quick and delicious Indian curries with traditional home-cooked taste.", isOpen: true },
      19: { id: 19, name: "Dunkin'", cuisine: "Coffee & Snacks", rating: 4.1, deliveryTime: "20-30 min", deliveryFee: "₹60", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=400&fit=crop&q=80", description: "America runs on Dunkin'! Coffee, donuts, and breakfast favorites.", isOpen: true },
      20: { id: 20, name: "Spice Route", cuisine: "Indian", rating: 4.4, deliveryTime: "35-50 min", deliveryFee: "₹60", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&h=400&fit=crop&q=80", description: "Authentic Indian flavors with aromatic spices and traditional recipes.", isOpen: true },
      21: { id: 21, name: "Tim Hortons", cuisine: "Coffee & Snacks", rating: 4.2, deliveryTime: "15-25 min", deliveryFee: "₹70", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=400&fit=crop&q=80", description: "Canada's favorite coffee shop with freshly brewed coffee and baked goods.", isOpen: true },
      22: { id: 22, name: "KFC", cuisine: "Fast Food", rating: 4.2, deliveryTime: "25-40 min", deliveryFee: "₹65", image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&h=400&fit=crop&q=80", description: "Finger lickin' good! Original recipe fried chicken and sides.", isOpen: true },
      23: { id: 23, name: "Subway", cuisine: "Fast Food", rating: 4.0, deliveryTime: "20-35 min", deliveryFee: "₹50", image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=800&h=400&fit=crop&q=80", description: "Eat fresh! Made-to-order subs with fresh ingredients.", isOpen: true },
      24: { id: 24, name: "Biryani Paradise", cuisine: "Indian", rating: 4.5, deliveryTime: "25-40 min", deliveryFee: "₹60", image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=800&h=400&fit=crop&q=80", description: "Home of the finest biryanis with authentic Hyderabadi flavors.", isOpen: true }
    };
    return restaurants[restaurantId as keyof typeof restaurants] || restaurants[1];
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=400&fit=crop&q=80'; // Restaurant placeholder
  };

  const restaurant = getRestaurantData(parseInt(id!));
  const restaurantMenu = getRestaurantMenu(parseInt(id!));
  const menuItems = restaurantMenu.items;
  const categories = [...new Set(menuItems.map(item => item.category))];

  const handleAddToCart = (itemId: number) => {
    const item = menuItems.find(i => i.id === itemId);
    if (item) {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        restaurant: restaurant.name,
        restaurantId: restaurant.id
      });
      
      setCart(prev => ({
        ...prev,
        [itemId]: (prev[itemId] || 0) + 1
      }));
      
      toast({
        title: "Added to cart! 🛒",
        description: `${item.name} added to your cart`,
        duration: 2000,
      });
    }
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

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-black text-white' : 'bg-gradient-to-br from-[rgb(249,243,239)] via-[rgb(210,193,182)] to-[rgb(249,243,239)] text-[rgb(27,60,83)]'}`}>
      {/* Header */}
      <header className={`backdrop-blur-md shadow-lg border-b sticky top-0 z-10 transition-colors duration-300 ${isDarkMode ? 'bg-black/80 border-gray-800' : 'bg-[rgb(249,243,239)]/80 border-[rgb(210,193,182)]'}`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center h-12 sm:h-14 md:h-16">
            <div className="flex items-center space-x-1 sm:space-x-3">
              <Link to="/">
                <Button variant="ghost" size="sm" className={`flex items-center space-x-1 p-1 sm:p-2 ${isDarkMode ? 'text-white hover:bg-gray-800' : 'text-[rgb(69,104,130)] hover:bg-[rgb(210,193,182)]'}`}>
                  <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-xs sm:text-sm">Back</span>
                </Button>
              </Link>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="bg-gradient-to-r from-[rgb(27,60,83)] to-[rgb(69,104,130)] p-1 sm:p-1.5 rounded-full">
                  <span className="text-sm sm:text-base font-bold text-white">🍽️</span>
                </div>
                <span className={`text-sm sm:text-lg md:text-xl font-bold bg-gradient-to-r from-[rgb(27,60,83)] to-[rgb(69,104,130)] bg-clip-text text-transparent ${isDarkMode ? 'text-white' : ''}`}>{restaurant.name}</span>
              </div>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className={`h-6 w-6 sm:h-8 sm:w-8 p-0 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-[rgb(210,193,182)]'}`}
              >
                {isDarkMode ? <Sun className="h-3 w-3 sm:h-4 sm:w-4 text-white" /> : <Moon className="h-3 w-3 sm:h-4 sm:w-4 text-[rgb(69,104,130)]" />}
              </Button>
              <Link to="/cart">
                <Button className={`flex items-center space-x-1 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-gradient-to-r from-[rgb(27,60,83)] to-[rgb(69,104,130)] hover:from-[rgb(69,104,130)] hover:to-[rgb(27,60,83)] text-white'}`}>
                  <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Cart ({getTotalItems()})</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Restaurant Hero */}
      <div className="relative h-40 sm:h-48 md:h-56 lg:h-64">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">{restaurant.name}</h1>
            <p className="text-xs sm:text-sm md:text-base opacity-90 mb-2 sm:mb-4 line-clamp-2">{restaurant.description}</p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 text-xs">
                <Star className="h-2 w-2 sm:h-3 sm:w-3 mr-1 fill-yellow-400 text-yellow-400" />
                {restaurant.rating}
              </Badge>
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 text-xs">
                <Clock className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                {restaurant.deliveryTime}
              </Badge>
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 text-xs">
                <Truck className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                {restaurant.deliveryFee}
              </Badge>
              <Badge className={`backdrop-blur-sm text-white border-purple-400/50 text-xs ${isDarkMode ? 'bg-purple-900/80' : 'bg-purple-600/80'}`}>
                {restaurant.cuisine}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
           {/* Category Navigation - Hidden on mobile, visible on desktop */}
           <div className="hidden lg:block lg:col-span-1">
             <div className="sticky top-20 sm:top-24">
               <h2 className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Menu Categories</h2>
               <div className="space-y-1 sm:space-y-2">
                 {categories.map((category) => (
                   <Button
                     key={category}
                     variant="ghost"
                     className={`w-full justify-start text-sm ${isDarkMode ? 'hover:bg-purple-900 text-gray-300 hover:text-white' : 'hover:bg-purple-50 hover:text-purple-600'}`}
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
               <div key={category} id={category} className="mb-6 sm:mb-8 lg:mb-12">
                 <h2 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{category}</h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                  {menuItems
                    .filter(item => item.category === category)
                    .map((item, index) => (
                       <Card key={item.id} className={`overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in border-purple-200 hover:border-purple-400 ${isDarkMode ? 'bg-gray-900 border-gray-700 hover:border-purple-600' : 'bg-white'}`} style={{animationDelay: `${index * 100}ms`}}>
                         <div className="flex flex-col">
                           <div className="flex-1 p-2 sm:p-3 lg:p-4">
                             <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-1 sm:mb-2">
                               <CardTitle className={`text-sm sm:text-base lg:text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1 sm:mb-0`}>
                                 {item.name}
                                 {item.popular && (
                                   <Badge className={`ml-0 sm:ml-2 mt-1 sm:mt-0 self-start text-xs ${isDarkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'}`}>
                                     🔥 Popular
                                   </Badge>
                                 )}
                               </CardTitle>
                             </div>
                             <p className={`text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                               {item.description}
                             </p>
                             <div className="flex items-center justify-between">
                               <span className={`text-base sm:text-lg lg:text-xl font-bold ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                                 ₹{item.price}
                               </span>
                               <div className="flex items-center space-x-1">
                                 {cart[item.id] && (
                                   <>
                                     <Button
                                       size="sm"
                                       variant="outline"
                                       onClick={() => removeFromCart(item.id)}
                                       className={`h-6 w-6 sm:h-7 sm:w-7 p-0 border-purple-300 text-purple-600 hover:bg-purple-50 ${isDarkMode ? 'border-purple-600 text-purple-400 hover:bg-purple-900' : ''}`}
                                     >
                                       <Minus className="h-2 w-2 sm:h-3 sm:w-3" />
                                     </Button>
                                     <span className={`text-xs sm:text-sm font-medium min-w-[14px] sm:min-w-[16px] text-center ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                                       {cart[item.id]}
                                     </span>
                                   </>
                                 )}
                                 <Button
                                   size="sm"
                                   onClick={() => handleAddToCart(item.id)}
                                   className="h-6 w-6 sm:h-7 sm:w-7 p-0 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900"
                                 >
                                   <Plus className="h-2 w-2 sm:h-3 sm:w-3" />
                                 </Button>
                               </div>
                             </div>
                           </div>
                           <div className="w-full h-24 sm:h-28 lg:h-32 mx-2 mb-2 sm:mx-3 sm:mb-3">
                             <img
                               src={item.image}
                               alt={item.name}
                               className={`w-full h-full object-cover rounded-lg border-2 ${isDarkMode ? 'border-purple-800' : 'border-purple-200'}`}
                               onError={(e) => {
                                 const fallbackImages = {
                                   'Pizza': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop&q=80',
                                   'Chinese': 'https://images.unsplash.com/photo-1617196034796-73989e891b8e?w=300&h=200&fit=crop&q=80',
                                   'Indian': 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop&q=80',
                                   'Burgers': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop&q=80',
                                   'Coffee': 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=300&h=200&fit=crop&q=80',
                                   'Desserts': 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=300&h=200&fit=crop&q=80',
                                   'Sides': 'https://images.unsplash.com/photo-1576107232684-1279f390b3d6?w=300&h=200&fit=crop&q=80',
                                   'Drinks': 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=300&h=200&fit=crop&q=80',
                                   'Tacos': 'https://images.unsplash.com/photo-1565299585323-38174c4a6779?w=300&h=200&fit=crop&q=80',
                                   'Mexican': 'https://images.unsplash.com/photo-1571197119282-7c4b999c2382?w=300&h=200&fit=crop&q=80',
                                   'Biryani': 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop&q=80',
                                   'Bread': 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop&q=80',
                                   'Rice': 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop&q=80',
                                   'Appetizers': 'https://images.unsplash.com/photo-1536304447766-da0ed4ce1b73?w=300&h=200&fit=crop&q=80',
                                   'Sandwiches': 'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=300&h=200&fit=crop&q=80',
                                   'Snacks': 'https://images.unsplash.com/photo-1426869981800-95ebf51ce900?w=300&h=200&fit=crop&q=80'
                                 };
                                 e.currentTarget.src = fallbackImages[item.category as keyof typeof fallbackImages] || 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop&q=80';
                               }}
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
