
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, CheckCircle, Truck, ChefHat, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const OrderTracking = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(25);

  // Simulate order progression
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < 3) {
          setProgress((prev + 1) * 25);
          return prev + 1;
        }
        return prev;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const orderSteps = [
    {
      id: 0,
      title: "Order Confirmed",
      description: "We've received your order and sent it to the restaurant",
      icon: Package,
      time: "2:30 PM",
      completed: true
    },
    {
      id: 1,
      title: "Chef's on it! 👨‍🍳",
      description: "Your delicious meal is being prepared with love",
      icon: ChefHat,
      time: "2:35 PM",
      completed: currentStep >= 1
    },
    {
      id: 2,
      title: "Out for Delivery",
      description: "Your order is on its way to you",
      icon: Truck,
      time: currentStep >= 2 ? "3:05 PM" : "Est. 3:05 PM",
      completed: currentStep >= 2
    },
    {
      id: 3,
      title: "Delivered",
      description: "Enjoy your meal!",
      icon: CheckCircle,
      time: currentStep >= 3 ? "3:25 PM" : "Est. 3:25 PM",
      completed: currentStep >= 3
    }
  ];

  const order = {
    id: "ORD-2024-001",
    restaurant: "Bella Italia",
    items: [
      { name: "Margherita Pizza", quantity: 2, price: 18.99 },
      { name: "Spaghetti Carbonara", quantity: 1, price: 22.99 }
    ],
    total: 63.97,
    estimatedDelivery: "25-35 min",
    driver: {
      name: "Mario Rodriguez",
      rating: 4.9,
      phone: "+1 (555) 123-4567"
    }
  };

  const getStepMessage = () => {
    switch (currentStep) {
      case 0:
        return "We'll ping you when your dish hits the road. 🍱";
      case 1:
        return "We're tracking every step — from kitchen to doorstep. 🍱🚗";
      case 2:
        return "Driver's just a few bites away from your place. Get your forks ready! 🍴📍";
      case 3:
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tracking Timeline */}
          <div className="lg:col-span-2">
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
                    <div key={step.id} className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                        step.completed 
                          ? 'bg-green-100 text-green-600' 
                          : step.id === currentStep 
                            ? 'bg-orange-100 text-orange-600 animate-pulse' 
                            : 'bg-gray-100 text-gray-400'
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className={`font-semibold ${
                            step.completed ? 'text-green-600' : step.id === currentStep ? 'text-orange-600' : 'text-gray-400'
                          }`}>
                            {step.title}
                          </h3>
                          <span className={`text-sm ${
                            step.completed ? 'text-green-600' : step.id === currentStep ? 'text-orange-600' : 'text-gray-400'
                          }`}>
                            {step.time}
                          </span>
                        </div>
                        <p className={`text-sm mt-1 ${
                          step.completed || step.id === currentStep ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Driver Info */}
            {currentStep >= 2 && (
              <Card className="mt-6 animate-fade-in">
                <CardHeader>
                  <CardTitle>Your Driver</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-xl">🚗</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{order.driver.name}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span>⭐ {order.driver.rating}</span>
                        <span>•</span>
                        <span>{order.driver.phone}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Call Driver
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{order.restaurant}</h3>
                  <div className="space-y-2">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span>{item.quantity}x {item.name}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <hr />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
                <div className="text-sm text-gray-600">
                  <p>Estimated delivery: {order.estimatedDelivery}</p>
                </div>
                
                {currentStep === 3 && (
                  <div className="pt-4 space-y-2">
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      Rate Your Experience ⭐
                    </Button>
                    <Button variant="outline" className="w-full">
                      Reorder This Meal 🔁
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
