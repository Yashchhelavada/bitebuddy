
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Clock, Truck, Plus, Minus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

const Restaurant = () => {
  const { id } = useParams<{ id: string }>();
  const [cart, setCart] = useState<{[key: number]: number}>({});

  // Updated restaurant data with higher prices
  const getRestaurantData = (restaurantId: number) => {
    const restaurants = {
      1: {
        id: 1,
        name: "Pizza Hut",
        cuisine: "Pizza",
        rating: 4.3,
        deliveryTime: "30-45 min",
        deliveryFee: "₹60",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=400&fit=crop",
        description: "World's favorite pizza place with authentic Italian taste and fresh ingredients.",
        isOpen: true
      },
      2: {
        id: 2,
        name: "McDonald's",
        cuisine: "Fast Food",
        rating: 4.1,
        deliveryTime: "20-35 min",
        deliveryFee: "₹50",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=400&fit=crop",
        description: "I'm Lovin' It! The world's leading fast-food chain with burgers, fries, and more.",
        isOpen: true
      },
      3: {
        id: 3,
        name: "Domino's Pizza",
        cuisine: "Pizza",
        rating: 4.4,
        deliveryTime: "25-40 min",
        deliveryFee: "₹55",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=400&fit=crop",
        description: "OH YES WE DID! Fresh pizza delivered hot in 30 minutes or less.",
        isOpen: true
      },
      7: {
        id: 7,
        name: "Taco Bell",
        cuisine: "Mexican",
        rating: 3.9,
        deliveryTime: "30-45 min",
        deliveryFee: "₹65",
        image: "https://images.unsplash.com/photo-1565299585323-38174c4a6779?w=800&h=400&fit=crop",
        description: "Live Más! Experience bold Mexican flavors with our tacos, burritos, and more.",
        isOpen: true
      }
    };
    return restaurants[restaurantId as keyof typeof restaurants] || restaurants[1];
  };

  const restaurant = getRestaurantData(parseInt(id!));

  const getMenuItems = (restaurantId: number) => {
    const menus = {
      1: [ // Pizza Hut
        {
          id: 1,
          name: "Margherita Pizza",
          description: "Classic pizza with tomato sauce, mozzarella cheese and fresh basil",
          price: 499,
          category: "Pizza",
          image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=300&h=200&fit=crop",
          popular: true
        },
        {
          id: 2,
          name: "Pepperoni Pizza",
          description: "Spicy pepperoni with mozzarella cheese and signature sauce",
          price: 649,
          category: "Pizza",
          image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&h=200&fit=crop",
          popular: true
        },
        {
          id: 3,
          name: "Garlic Bread",
          description: "Freshly baked bread with garlic butter and herbs",
          price: 229,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1549300461-11c5b94839d3?w=300&h=200&fit=crop"
        },
        {
          id: 4,
          name: "Coca Cola",
          description: "Refreshing cold beverage",
          price: 119,
          category: "Drinks",
          image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=300&h=200&fit=crop"
        }
      ],
      2: [ // McDonald's
        {
          id: 1,
          name: "Big Mac",
          description: "Two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun",
          price: 389,
          category: "Burgers",
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop",
          popular: true
        },
        {
          id: 2,
          name: "McFries",
          description: "Golden crispy french fries with the perfect amount of salt",
          price: 169,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1576107232684-1279f390b3d6?w=300&h=200&fit=crop"
        },
        {
          id: 3,
          name: "McChicken",
          description: "Crispy chicken patty with lettuce and mayo",
          price: 329,
          category: "Chicken",
          image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=300&h=200&fit=crop"
        },
        {
          id: 4,
          name: "McCafe Coffee",
          description: "Premium arabica coffee blend",
          price: 199,
          category: "Drinks",
          image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=200&fit=crop"
        }
      ],
      3: [ // Domino's
        {
          id: 1,
          name: "Farmhouse Pizza",
          description: "Fresh vegetables with cheese and signature sauce",
          price: 549,
          category: "Pizza",
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop",
          popular: true
        },
        {
          id: 2,
          name: "Chicken Dominator",
          description: "Loaded with grilled chicken and exotic toppings",
          price: 749,
          category: "Pizza",
          image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=300&h=200&fit=crop",
          popular: true
        },
        {
          id: 3,
          name: "Garlic Breadsticks",
          description: "Soft breadsticks with garlic seasoning",
          price: 199,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1549300461-11c5b94839d3?w=300&h=200&fit=crop"
        },
        {
          id: 4,
          name: "Pepsi",
          description: "Chilled refreshing cola drink",
          price: 109,
          category: "Drinks",
          image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=300&h=200&fit=crop"
        }
      ],
      7: [ // Taco Bell
        {
          id: 1,
          name: "Crunchy Taco Supreme",
          description: "Seasoned beef, lettuce, tomatoes, cheese, and sour cream in a crunchy shell",
          price: 219,
          category: "Tacos",
          image: "https://images.unsplash.com/photo-1565299585323-38174c4a6779?w=300&h=200&fit=crop",
          popular: true
        },
        {
          id: 2,
          name: "Chicken Quesadilla",
          description: "Grilled chicken with melted cheese in a flour tortilla",
          price: 329,
          category: "Mexican",
          image: "https://images.unsplash.com/photo-1571197119282-7c4b999c2382?w=300&h=200&fit=crop",
          popular: true
        },
        {
          id: 3,
          name: "Nachos Supreme",
          description: "Crispy nachos with cheese, beef, beans, tomatoes, and sour cream",
          price: 279,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=300&h=200&fit=crop"
        },
        {
          id: 4,
          name: "Mountain Dew",
          description: "Citrus flavored energizing drink",
          price: 109,
          category: "Drinks",
          image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=300&h=200&fit=crop"
        },
        {
          id: 5,
          name: "Bean Burrito",
          description: "Seasoned beans wrapped in a warm flour tortilla",
          price: 199,
          category: "Tacos",
          image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop"
        }
      ]
    };
    return menus[restaurantId as keyof typeof menus] || menus[1];
  };

  const menuItems = getMenuItems(parseInt(id!));
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
    <div className="min-h-screen bg-gradient-to-br from-[rgb(249,243,239)] via-[rgb(210,193,182)] to-[rgb(249,243,239)] dark:from-[rgb(27,60,83)] dark:via-[rgb(69,104,130)] dark:to-[rgb(27,60,83)] transition-colors duration-300">
      {/* Header */}
      <header className="bg-[rgb(249,243,239)]/80 backdrop-blur-md dark:bg-[rgb(27,60,83)]/80 shadow-lg border-b border-[rgb(210,193,182)] dark:border-[rgb(69,104,130)] sticky top-0 z-10 transition-colors duration-300">
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
            <Link to="/cart">
              <Button className="flex items-center space-x-2 bg-gradient-to-r from-[rgb(27,60,83)] to-[rgb(69,104,130)] hover:from-[rgb(69,104,130)] hover:to-[rgb(27,60,83)]">
                <ShoppingCart className="h-4 w-4" />
                <span>Cart ({getTotalItems()})</span>
              </Button>
            </Link>
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
              <Badge className="bg-purple-600/80 backdrop-blur-sm text-white border-purple-400/50">
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
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Menu Categories</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="ghost"
                    className="w-full justify-start hover:bg-purple-50 hover:text-purple-600 dark:hover:bg-purple-900 dark:text-gray-300"
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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {menuItems
                    .filter(item => item.category === category)
                    .map((item, index) => (
                      <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in dark:bg-gray-800 dark:border-purple-800 border-purple-200 hover:border-purple-400 dark:hover:border-purple-600" style={{animationDelay: `${index * 100}ms`}}>
                        <div className="flex">
                          <div className="flex-1 p-4">
                            <div className="flex items-start justify-between mb-2">
                              <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                                {item.name}
                                {item.popular && (
                                  <Badge className="ml-2 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                                    🔥 Popular
                                  </Badge>
                                )}
                              </CardTitle>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                              {item.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-xl font-bold text-purple-600 dark:text-purple-400">
                                ₹{item.price}
                              </span>
                              <div className="flex items-center space-x-2">
                                {cart[item.id] && (
                                  <>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => removeFromCart(item.id)}
                                      className="h-8 w-8 p-0 border-purple-300 text-purple-600 hover:bg-purple-50 dark:border-purple-600 dark:text-purple-400 dark:hover:bg-purple-900"
                                    >
                                      <Minus className="h-3 w-3" />
                                    </Button>
                                    <span className="text-sm font-medium min-w-[20px] text-center text-purple-600 dark:text-purple-400">
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
                              className="w-full h-full object-cover rounded-lg border-2 border-purple-200 dark:border-purple-800"
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
