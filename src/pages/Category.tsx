
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import RestaurantCard from "@/components/RestaurantCard";

const Category = () => {
  const { category } = useParams<{ category: string }>();
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

  const getRestaurantsByCategory = (categoryName: string) => {
    const restaurantData = {
      pizza: [
        { id: 1, name: "Pizza Hut", cuisine: "Pizza", rating: 4.3, deliveryTime: "30-45 min", deliveryFee: "₹60", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop", isOpen: true },
        { id: 3, name: "Domino's Pizza", cuisine: "Pizza", rating: 4.4, deliveryTime: "25-40 min", deliveryFee: "₹55", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop", isOpen: true },
        { id: 9, name: "Papa John's", cuisine: "Pizza", rating: 4.2, deliveryTime: "35-50 min", deliveryFee: "₹65", image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop", isOpen: true },
        { id: 10, name: "Chicago Pizza", cuisine: "Pizza", rating: 4.1, deliveryTime: "30-40 min", deliveryFee: "₹70", image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=300&fit=crop", isOpen: true },
        { id: 11, name: "Fire Stone Pizza", cuisine: "Pizza", rating: 4.0, deliveryTime: "25-35 min", deliveryFee: "₹55", image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&h=300&fit=crop", isOpen: true }
      ],
      burgers: [
        { id: 2, name: "McDonald's", cuisine: "Fast Food", rating: 4.1, deliveryTime: "20-35 min", deliveryFee: "₹50", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop", isOpen: true },
        { id: 6, name: "Burger King", cuisine: "Burgers", rating: 4.1, deliveryTime: "25-35 min", deliveryFee: "₹55", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop", isOpen: true },
        { id: 12, name: "Hardee's", cuisine: "Burgers", rating: 4.0, deliveryTime: "30-40 min", deliveryFee: "₹60", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop", isOpen: true },
        { id: 13, name: "Carl's Jr", cuisine: "Burgers", rating: 3.9, deliveryTime: "25-40 min", deliveryFee: "₹65", image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&h=300&fit=crop", isOpen: true },
        { id: 14, name: "Wendy's", cuisine: "Burgers", rating: 4.2, deliveryTime: "20-30 min", deliveryFee: "₹55", image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400&h=300&fit=crop", isOpen: true }
      ],
      chinese: [
        { id: 15, name: "Panda Express", cuisine: "Chinese", rating: 4.0, deliveryTime: "25-35 min", deliveryFee: "₹60", image: "https://images.unsplash.com/photo-1617196034796-73989e891b8e?w=400&h=300&fit=crop", isOpen: true },
        { id: 16, name: "China Garden", cuisine: "Chinese", rating: 4.2, deliveryTime: "30-45 min", deliveryFee: "₹55", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop", isOpen: true },
        { id: 17, name: "Golden Dragon", cuisine: "Chinese", rating: 4.1, deliveryTime: "35-50 min", deliveryFee: "₹70", image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&h=300&fit=crop", isOpen: true },
        { id: 18, name: "Wok Express", cuisine: "Chinese", rating: 3.9, deliveryTime: "20-30 min", deliveryFee: "₹50", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop", isOpen: true },
        { id: 19, name: "Szechuan Palace", cuisine: "Chinese", rating: 4.3, deliveryTime: "30-40 min", deliveryFee: "₹65", image: "https://images.unsplash.com/photo-1536304447766-da0ed4ce1b73?w=400&h=300&fit=crop", isOpen: true }
      ],
      indian: [
        { id: 20, name: "Spice Route", cuisine: "Indian", rating: 4.4, deliveryTime: "35-50 min", deliveryFee: "₹60", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop", isOpen: true },
        { id: 21, name: "Mughal Darbar", cuisine: "Indian", rating: 4.2, deliveryTime: "40-55 min", deliveryFee: "₹70", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop", isOpen: true },
        { id: 22, name: "Tandoor Express", cuisine: "Indian", rating: 4.1, deliveryTime: "30-45 min", deliveryFee: "₹55", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop", isOpen: true },
        { id: 23, name: "Curry House", cuisine: "Indian", rating: 4.0, deliveryTime: "35-45 min", deliveryFee: "₹65", image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop", isOpen: true },
        { id: 24, name: "Biryani Paradise", cuisine: "Indian", rating: 4.5, deliveryTime: "25-40 min", deliveryFee: "₹60", image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&h=300&fit=crop", isOpen: true }
      ],
      coffee: [
        { id: 8, name: "Starbucks", cuisine: "Coffee & Snacks", rating: 4.5, deliveryTime: "15-25 min", deliveryFee: "₹80", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop", isOpen: true },
        { id: 25, name: "Costa Coffee", cuisine: "Coffee", rating: 4.3, deliveryTime: "20-30 min", deliveryFee: "₹75", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop", isOpen: true },
        { id: 26, name: "Cafe Coffee Day", cuisine: "Coffee", rating: 4.0, deliveryTime: "15-25 min", deliveryFee: "₹60", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop", isOpen: true },
        { id: 27, name: "Blue Tokai", cuisine: "Coffee", rating: 4.4, deliveryTime: "20-35 min", deliveryFee: "₹85", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop", isOpen: true },
        { id: 28, name: "Third Wave Coffee", cuisine: "Coffee", rating: 4.2, deliveryTime: "25-35 min", deliveryFee: "₹70", image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400&h=300&fit=crop", isOpen: true }
      ],
      desserts: [
        { id: 29, name: "Baskin Robbins", cuisine: "Ice Cream", rating: 4.3, deliveryTime: "20-30 min", deliveryFee: "₹60", image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&h=300&fit=crop", isOpen: true },
        { id: 30, name: "Cake Studio", cuisine: "Desserts", rating: 4.2, deliveryTime: "30-45 min", deliveryFee: "₹70", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop", isOpen: true },
        { id: 31, name: "Sweet Treats", cuisine: "Desserts", rating: 4.1, deliveryTime: "25-40 min", deliveryFee: "₹55", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop", isOpen: true },
        { id: 32, name: "Gelato Junction", cuisine: "Ice Cream", rating: 4.4, deliveryTime: "15-25 min", deliveryFee: "₹65", image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=400&h=300&fit=crop", isOpen: true },
        { id: 33, name: "Donut Delight", cuisine: "Desserts", rating: 4.0, deliveryTime: "20-35 min", deliveryFee: "₹50", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop", isOpen: true }
      ]
    };
    
    return restaurantData[categoryName as keyof typeof restaurantData] || [];
  };

  const restaurants = getRestaurantsByCategory(category || "");
  const categoryTitle = category ? category.charAt(0).toUpperCase() + category.slice(1) : "Category";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[rgb(249,243,239)] via-[rgb(210,193,182)] to-[rgb(249,243,239)] dark:from-[rgb(27,60,83)] dark:via-[rgb(69,104,130)] dark:to-[rgb(27,60,83)] transition-colors duration-300">
      {/* Header */}
      <header className="bg-[rgb(249,243,239)]/80 backdrop-blur-md dark:bg-[rgb(27,60,83)]/80 shadow-lg border-b border-[rgb(210,193,182)] dark:border-[rgb(69,104,130)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-[rgb(69,104,130)] hover:bg-[rgb(210,193,182)] dark:text-[rgb(210,193,182)] dark:hover:bg-[rgb(69,104,130)]">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back</span>
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-[rgb(27,60,83)] to-[rgb(69,104,130)] p-2 rounded-full">
                  <span className="text-lg font-bold text-white">🍽️</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-[rgb(27,60,83)] to-[rgb(69,104,130)] bg-clip-text text-transparent">BiteBuddy</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="h-8 w-8 p-0 hover:bg-[rgb(210,193,182)] dark:hover:bg-[rgb(69,104,130)]"
              >
                {isDarkMode ? <Sun className="h-4 w-4 text-[rgb(210,193,182)]" /> : <Moon className="h-4 w-4 text-[rgb(69,104,130)]" />}
              </Button>
              <Link to="/cart">
                <Button variant="outline" size="sm" className="border-[rgb(69,104,130)] text-[rgb(69,104,130)] hover:bg-[rgb(210,193,182)] dark:border-[rgb(210,193,182)] dark:text-[rgb(210,193,182)] dark:hover:bg-[rgb(69,104,130)]">
                  Cart (0)
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Category Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[rgb(27,60,83)] dark:text-white mb-4">
            {categoryTitle} Restaurants
          </h1>
          <p className="text-lg text-[rgb(69,104,130)] dark:text-[rgb(210,193,182)]">
            Discover the best {categoryTitle.toLowerCase()} places in Ahmedabad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {restaurants.map((restaurant, index) => (
            <RestaurantCard 
              key={restaurant.id} 
              restaurant={restaurant} 
              animationDelay={index * 150}
            />
          ))}
        </div>

        {restaurants.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-[rgb(69,104,130)] dark:text-[rgb(210,193,182)]">
              No restaurants found for this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
