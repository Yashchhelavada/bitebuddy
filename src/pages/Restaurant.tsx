
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

  // Mock restaurant data - in a real app, this would come from an API
  const restaurant = {
    id: parseInt(id!),
    name: "Bella Italia",
    cuisine: "Italian",
    rating: 4.8,
    deliveryTime: "25-35 min",
    deliveryFee: "$2.99",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=400&fit=crop",
    description: "Authentic Italian cuisine made with love and traditional recipes passed down through generations.",
    isOpen: true
  };

  const menuItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      description: "Fresh mozzarella, tomato sauce, basil, and olive oil",
      price: 18.99,
      category: "Pizza",
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=300&h=200&fit=crop",
      popular: true
    },
    {
      id: 2,
      name: "Spaghetti Carbonara",
      description: "Classic Roman pasta with eggs, cheese, pancetta, and pepper",
      price: 22.99,
      category: "Pasta",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Chicken Parmigiana",
      description: "Breaded chicken breast with marinara sauce and melted mozzarella",
      price: 26.99,
      category: "Main Course",
      image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=300&h=200&fit=crop"
    },
    {
      id: 4,
      name: "Caesar Salad",
      description: "Crisp romaine lettuce, parmesan cheese, croutons, and caesar dressing",
      price: 14.99,
      category: "Salads",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop"
    },
    {
      id: 5,
      name: "Tiramisu",
      description: "Classic Italian dessert with mascarpone, coffee, and ladyfingers",
      price: 8.99,
      category: "Desserts",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop"
    },
    {
      id: 6,
      name: "Pepperoni Pizza",
      description: "Classic pepperoni with mozzarella cheese and tomato sauce",
      price: 21.99,
      category: "Pizza",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&h=200&fit=crop",
      popular: true
    }
  ];

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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back</span>
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="text-2xl">🍽️</div>
                <span className="text-xl font-bold text-gray-900">FoodieExpress</span>
              </div>
            </div>
            <Link to="/cart">
              <Button className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700">
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
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{restaurant.name}</h1>
            <p className="text-lg opacity-90 mb-4">{restaurant.description}</p>
            <div className="flex flex-wrap items-center gap-4">
              <Badge className="bg-white bg-opacity-20 text-white">
                <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                {restaurant.rating}
              </Badge>
              <Badge className="bg-white bg-opacity-20 text-white">
                <Clock className="h-3 w-3 mr-1" />
                {restaurant.deliveryTime}
              </Badge>
              <Badge className="bg-white bg-opacity-20 text-white">
                <Truck className="h-3 w-3 mr-1" />
                {restaurant.deliveryFee}
              </Badge>
              <Badge className="bg-white bg-opacity-20 text-white">
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
              <h2 className="text-xl font-bold text-gray-900 mb-4">Menu Categories</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="ghost"
                    className="w-full justify-start hover:bg-orange-50 hover:text-orange-600"
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {menuItems
                    .filter(item => item.category === category)
                    .map((item, index) => (
                      <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                        <div className="flex">
                          <div className="flex-1 p-4">
                            <div className="flex items-start justify-between mb-2">
                              <CardTitle className="text-lg font-semibold text-gray-900">
                                {item.name}
                                {item.popular && (
                                  <Badge className="ml-2 bg-orange-100 text-orange-800">
                                    🔥 Popular
                                  </Badge>
                                )}
                              </CardTitle>
                            </div>
                            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                              {item.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-xl font-bold text-gray-900">
                                ${item.price}
                              </span>
                              <div className="flex items-center space-x-2">
                                {cart[item.id] && (
                                  <>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => removeFromCart(item.id)}
                                      className="h-8 w-8 p-0"
                                    >
                                      <Minus className="h-3 w-3" />
                                    </Button>
                                    <span className="text-sm font-medium min-w-[20px] text-center">
                                      {cart[item.id]}
                                    </span>
                                  </>
                                )}
                                <Button
                                  size="sm"
                                  onClick={() => addToCart(item.id)}
                                  className="h-8 w-8 p-0 bg-orange-600 hover:bg-orange-700"
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
                              className="w-full h-full object-cover rounded-lg"
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
