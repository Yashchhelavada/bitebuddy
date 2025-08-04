
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, CheckCircle, Truck, ChefHat, Package, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useCart } from "@/contexts/CartContext";

const OrderTracking = () => {
  const { cartItems, getTotalPrice } = useCart();
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(25);

  // Simulate order progression - 2+ minutes total
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < 4) {
          const newStep = prev + 1;
          setProgress((newStep / 4) * 100);
          return newStep;
        }
        return prev;
      });
    }, 30000); // 30 seconds per step = 2 minutes total

    return () => clearInterval(timer);
  }, []);

  const orderSteps = [
    {
      id: 0,
      title: "Order Confirmed",
      description: "We've received your order and sent it to the restaurant",
      icon: Package,
      time: "2:30 PM",
      completed: true,
      image: "🍽️",
      details: "Your order has been confirmed and payment processed successfully"
    },
    {
      id: 1,
      title: "Preparing Your Food 👨‍🍳",
      description: "Our chef is carefully preparing your delicious meal",
      icon: ChefHat,
      time: "2:35 PM",
      completed: currentStep >= 1,
      image: "👨‍🍳",
      details: "Fresh ingredients are being used to craft your perfect meal"
    },
    {
      id: 2,
      title: "Delivery Partner Assigned",
      description: "A delivery partner has been assigned to your order",
      icon: User,
      time: currentStep >= 2 ? "2:55 PM" : "Est. 2:55 PM",
      completed: currentStep >= 2,
      image: "🚗",
      details: "Your delivery partner is heading to the restaurant"
    },
    {
      id: 3,
      title: "Order Picked Up",
      description: "Your order has been picked up and is on the way",
      icon: Truck,
      time: currentStep >= 3 ? "3:05 PM" : "Est. 3:05 PM",
      completed: currentStep >= 3,
      image: "📦",
      details: "Your food is safely packed and heading your way"
    },
    {
      id: 4,
      title: "Delivered",
      description: "Enjoy your meal!",
      icon: CheckCircle,
      time: currentStep >= 4 ? "3:25 PM" : "Est. 3:25 PM",
      completed: currentStep >= 4,
      image: "✅",
      details: "Your order has been delivered successfully. Bon appétit!"
    }
  ];

  const order = {
    id: "ORD-2024-001",
    restaurant: cartItems.length > 0 ? cartItems[0].restaurant : "Restaurant",
    items: cartItems,
    total: getTotalPrice(),
    estimatedDelivery: "25-35 min",
    driver: {
      name: "Rajesh Kumar",
      rating: 4.9,
      phone: "+91 98765 43210"
    }
  };

  const getStepMessage = () => {
    switch (currentStep) {
      case 0:
        return "We'll ping you when your dish hits the road. 🍱";
      case 1:
        return "Our chef is working their magic in the kitchen! 👨‍🍳✨";
      case 2:
        return "A delivery partner is assigned and heading to pick up your order! 🚗";
      case 3:
        return "Your order is picked up and on the way to you! 🍴📍";
      case 4:
        return "Meal delivered! Hope your taste buds are dancing. 💃";
      default:
        return "Tracking your delicious order...";
    }
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
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Order Status Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Tracking</h1>
          <p className="text-lg text-gray-600 mb-4">{getStepMessage()}</p>
          <Badge variant="secondary" className="text-sm">
            Order #{order.id}
          </Badge>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Tracking Timeline */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Order Progress</span>
                </CardTitle>
                <Progress value={progress} className="mt-4" />
              </CardHeader>
              <CardContent className="space-y-6">
                {orderSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.id} className="animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                      <div className="flex items-start space-x-4 p-4 rounded-lg border-2 transition-all duration-300" 
                           style={{
                             borderColor: step.completed ? '#10b981' : step.id === currentStep ? '#f59e0b' : '#e5e7eb',
                             backgroundColor: step.completed ? '#ecfdf5' : step.id === currentStep ? '#fef3c7' : '#f9fafb'
                           }}>
                        {/* Visual Image/Icon */}
                        <div className="flex flex-col items-center space-y-2">
                          <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl ${
                            step.completed 
                              ? 'bg-green-100 border-2 border-green-500' 
                              : step.id === currentStep 
                                ? 'bg-orange-100 border-2 border-orange-500 animate-pulse' 
                                : 'bg-gray-100 border-2 border-gray-300'
                          }`}>
                            {step.image}
                          </div>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            step.completed 
                              ? 'bg-green-100 text-green-600' 
                              : step.id === currentStep 
                                ? 'bg-orange-100 text-orange-600' 
                                : 'bg-gray-100 text-gray-400'
                          }`}>
                            <Icon className="h-4 w-4" />
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className={`font-bold text-lg ${
                              step.completed ? 'text-green-600' : step.id === currentStep ? 'text-orange-600' : 'text-gray-400'
                            }`}>
                              {step.title}
                            </h3>
                            <span className={`text-sm font-medium ${
                              step.completed ? 'text-green-600' : step.id === currentStep ? 'text-orange-600' : 'text-gray-400'
                            }`}>
                              {step.time}
                            </span>
                          </div>
                          <p className={`text-sm mb-2 ${
                            step.completed || step.id === currentStep ? 'text-gray-700' : 'text-gray-400'
                          }`}>
                            {step.description}
                          </p>
                          <p className={`text-xs italic ${
                            step.completed || step.id === currentStep ? 'text-gray-600' : 'text-gray-400'
                          }`}>
                            {step.details}
                          </p>
                          
                          {/* Animation for current step */}
                          {step.id === currentStep && !step.completed && (
                            <div className="mt-3 flex items-center space-x-2 text-orange-600">
                              <div className="w-2 h-2 rounded-full bg-orange-500 animate-bounce"></div>
                              <div className="w-2 h-2 rounded-full bg-orange-500 animate-bounce" style={{animationDelay: '0.1s'}}></div>
                              <div className="w-2 h-2 rounded-full bg-orange-500 animate-bounce" style={{animationDelay: '0.2s'}}></div>
                              <span className="text-sm font-medium">In Progress...</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Connection line */}
                      {index < orderSteps.length - 1 && (
                        <div className="flex justify-center my-2">
                          <div className={`w-1 h-8 ${
                            step.completed ? 'bg-green-500' : 'bg-gray-300'
                          }`}></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Driver Info */}
            {currentStep >= 2 && (
              <Card className="mt-6 animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span>🚗</span>
                    <span>Your Delivery Partner</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-orange-200">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center border-2 border-orange-300">
                      <span className="text-2xl">🧑‍🚀</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg">{order.driver.name}</h3>
                      <div className="flex items-center space-x-3 text-sm text-gray-600 mt-1">
                        <span className="flex items-center space-x-1">
                          <span>⭐</span>
                          <span className="font-medium">{order.driver.rating}</span>
                        </span>
                        <span>•</span>
                        <span className="font-medium">{order.driver.phone}</span>
                      </div>
                      <div className="mt-2 text-xs text-orange-600 font-medium">
                        {currentStep === 2 && "Heading to restaurant..."}
                        {currentStep >= 3 && "En route to your location!"}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                      📞 Call
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
