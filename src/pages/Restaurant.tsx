
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Clock, Truck, Plus, Minus, ShoppingCart, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

const Restaurant = () => {
  const { id } = useParams<{ id: string }>();
  const [cart, setCart] = useState<{[key: number]: number}>({});
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
      4: {
        id: 4,
        name: "KFC",
        cuisine: "Fried Chicken",
        rating: 4.2,
        deliveryTime: "25-40 min",
        deliveryFee: "₹70",
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&h=400&fit=crop",
        description: "Finger Lickin' Good! Original Recipe chicken and more delicious meals.",
        isOpen: true
      },
      5: {
        id: 5,
        name: "Subway",
        cuisine: "Sandwiches",
        rating: 4.0,
        deliveryTime: "20-30 min",
        deliveryFee: "₹45",
        image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=800&h=400&fit=crop",
        description: "Eat Fresh! Freshly made sandwiches with your choice of ingredients.",
        isOpen: true
      },
      6: {
        id: 6,
        name: "Burger King",
        cuisine: "Burgers",
        rating: 4.1,
        deliveryTime: "25-35 min",
        deliveryFee: "₹55",
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&h=400&fit=crop",
        description: "Have It Your Way! Flame-grilled burgers made just how you like them.",
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
      },
      8: {
        id: 8,
        name: "Starbucks",
        cuisine: "Coffee & Snacks",
        rating: 4.5,
        deliveryTime: "15-25 min",
        deliveryFee: "₹80",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=400&fit=crop",
        description: "Premium coffee, handcrafted beverages, and delicious pastries.",
        isOpen: true
      }
    };
    return restaurants[restaurantId as keyof typeof restaurants] || restaurants[1];
  };

  const restaurant = getRestaurantData(parseInt(id!));

  const getMenuItems = (restaurantId: number) => {
    const menus = {
      1: [ // Pizza Hut - Pizzas
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
          name: "Supreme Pizza",
          description: "Loaded with pepperoni, sausage, bell peppers, onions and mushrooms",
          price: 799,
          category: "Pizza",
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop"
        },
        {
          id: 4,
          name: "Garlic Bread",
          description: "Freshly baked bread with garlic butter and herbs",
          price: 229,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1549300461-11c5b94839d3?w=300&h=200&fit=crop"
        },
        {
          id: 5,
          name: "Coca Cola",
          description: "Refreshing cold beverage",
          price: 119,
          category: "Drinks",
          image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=300&h=200&fit=crop"
        }
      ],
      2: [ // McDonald's - Burgers & Fast Food
        {
          id: 6,
          name: "Big Mac",
          description: "Two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun",
          price: 389,
          category: "Burgers",
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop",
          popular: true
        },
        {
          id: 7,
          name: "Quarter Pounder",
          description: "Fresh beef burger with cheese, onions, pickles, ketchup and mustard",
          price: 429,
          category: "Burgers",
          image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&h=200&fit=crop",
          popular: true
        },
        {
          id: 8,
          name: "McFries Large",
          description: "Golden crispy french fries with the perfect amount of salt",
          price: 169,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1576107232684-1279f390b3d6?w=300&h=200&fit=crop"
        },
        {
          id: 9,
          name: "McFlurry Oreo",
          description: "Vanilla soft serve with Oreo cookie pieces",
          price: 199,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=300&h=200&fit=crop"
        }
      ],
      3: [ // Domino's Pizza - Different Pizzas
        {
          id: 10,
          name: "Farmhouse Pizza",
          description: "Fresh vegetables with cheese and signature sauce",
          price: 549,
          category: "Pizza",
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop",
          popular: true
        },
        {
          id: 11,
          name: "Chicken Dominator",
          description: "Loaded with grilled chicken and exotic toppings",
          price: 749,
          category: "Pizza",
          image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=300&h=200&fit=crop",
          popular: true
        },
        {
          id: 12,
          name: "Veg Extravaganza",
          description: "Black olives, capsicum, onions, grilled mushrooms, corn, tomatoes, jalapeno",
          price: 629,
          category: "Pizza",
          image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop"
        },
        {
          id: 13,
          name: "Garlic Breadsticks",
          description: "Soft breadsticks with garlic seasoning",
          price: 199,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1549300461-11c5b94839d3?w=300&h=200&fit=crop"
        }
      ],
      4: [ // KFC - Chicken Items
        {
          id: 14,
          name: "Original Recipe Chicken",
          description: "Crispy fried chicken with 11 herbs and spices",
          price: 349,
          category: "Chicken",
          image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=300&h=200&fit=crop",
          popular: true
        },
        {
          id: 15,
          name: "Hot & Crispy Chicken",
          description: "Spicy and crispy fried chicken pieces",
          price: 379,
          category: "Chicken",
          image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=200&fit=crop",
          popular: true
        },
        {
          id: 16,
          name: "Chicken Popcorn",
          description: "Bite-sized chicken pieces, crispy and delicious",
          price: 249,
          category: "Chicken",
          image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=300&h=200&fit=crop"
        },
        {
          id: 17,
          name: "Coleslaw",
          description: "Fresh cabbage and carrot salad with creamy dressing",
          price: 129,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300&h=200&fit=crop"
        }
      ],
      5: [ // Subway - Sandwiches
        {
          id: 18,
          name: "Italian B.M.T.",
          description: "Genoa salami, spiced pepperoni, and ham with your choice of veggies",
          price: 329,
          category: "Sandwiches",
          image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=300&h=200&fit=crop",
          popular: true
        },
        {
          id: 19,
          name: "Chicken Teriyaki",
          description: "Tender chicken strips with teriyaki sauce and vegetables",
          price: 359,
          category: "Sandwiches",
          image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=300&h=200&fit=crop",
          popular: true
        },
        {
          id: 20,
          name: "Veggie Delite",
          description: "All your favorite veggies on freshly baked bread",
          price: 249,
          category: "Sandwiches",
          image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=300&h=200&fit=crop"
        },
        {
          id: 21,
          name: "Cookies",
          description: "Freshly baked chocolate chip cookies",
          price: 89,
          category: "Desserts",
          image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=300&h=200&fit=crop"
        }
      ],
      6: [ // Burger King - Burgers
        {
          id: 22,
          name: "Whopper",
          description: "Flame-grilled beef patty with tomatoes, lettuce, mayo, ketchup, pickles, onions",
          price: 399,
          category: "Burgers",
          image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&h=200&fit=crop",
          popular: true
        },
        {
          id: 23,
          name: "Chicken Royale",
          description: "Crispy chicken fillet with lettuce and mayo",
          price: 349,
          category: "Burgers",
          image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop",
          popular: true
        },
        {
          id: 24,
          name: "Veg Whopper",
          description: "Plant-based patty with all the classic Whopper toppings",
          price: 329,
          category: "Burgers",
          image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=300&h=200&fit=crop"
        },
        {
          id: 25,
          name: "Onion Rings",
          description: "Crispy golden onion rings",
          price: 149,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1639024471283-03418e777bb1?w=300&h=200&fit=crop"
        }
      ],
      7: [ // Taco Bell - Mexican Food
        {
          id: 26,
          name: "Crunchy Taco Supreme",
          description: "Seasoned beef, lettuce, tomatoes, cheese, and sour cream in a crunchy shell",
          price: 219,
          category: "Tacos",
          image: "https://images.unsplash.com/photo-1565299585323-38174c4a6779?w=300&h=200&fit=crop",
          popular: true
        },
        {
          id: 27,
          name: "Chicken Quesadilla",
          description: "Grilled chicken with melted cheese in a flour tortilla",
          price: 329,
          category: "Mexican",
          image: "https://images.unsplash.com/photo-1571197119282-7c4b999c2382?w=300&h=200&fit=crop",
          popular: true
        },
        {
          id: 28,
          name: "Beef Burrito",
          description: "Seasoned beef with rice, beans, and cheese wrapped in a flour tortilla",
          price: 289,
          category: "Mexican",
          image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop"
        },
        {
          id: 29,
          name: "Nachos Supreme",
          description: "Crispy nachos with cheese, beef, beans, tomatoes, and sour cream",
          price: 279,
          category: "Sides",
          image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=300&h=200&fit=crop"
        }
      ],
      8: [ // Starbucks - Coffee & Snacks
        {
          id: 30,
          name: "Caffe Latte",
          description: "Rich espresso with steamed milk and a light layer of foam",
          price: 329,
          category: "Coffee",
          image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=300&h=200&fit=crop",
          popular: true
        },
        {
          id: 31,
          name: "Cappuccino",
          description: "Espresso with steamed milk and thick foam",
          price: 299,
          category: "Coffee",
          image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=200&fit=crop",
          popular: true
        },
        {
          id: 32,
          name: "Frappuccino",
          description: "Blended coffee beverage with ice and whipped cream",
          price: 399,
          category: "Coffee",
          image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop"
        },
        {
          id: 33,
          name: "Blueberry Muffin",
          description: "Freshly baked muffin with blueberries",
          price: 199,
          category: "Snacks",
          image: "https://images.unsplash.com/photo-1426869981800-95ebf51ce900?w=300&h=200&fit=crop"
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
