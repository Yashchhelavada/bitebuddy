import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Sun, Moon, CreditCard, Smartphone, Banknote, MapPin, User, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";

const Payment = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalPrice, getTotalItems } = useCart();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      return true;
    }
    return false;
  });

  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    instructions: ""
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

  const subtotal = getTotalPrice();
  const deliveryFee = subtotal > 0 ? 50 : 0;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + deliveryFee + tax;

  const handlePayment = () => {
    if (!deliveryInfo.name || !deliveryInfo.phone || !deliveryInfo.address) {
      toast({
        title: "Missing information",
        description: "Please fill in all required delivery details",
        duration: 3000,
      });
      return;
    }

    if (getTotalItems() === 0) {
      toast({
        title: "Empty cart",
        description: "Please add items to your cart before placing an order",
        duration: 3000,
      });
      return;
    }

    toast({
      title: "Order placed successfully! 🎉",
      description: "Your order has been confirmed and will be delivered soon.",
      duration: 4000,
    });
    
    setTimeout(() => {
      navigate('/tracking');
    }, 2000);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-black text-white' : 'bg-gradient-to-br from-[rgb(249,243,239)] via-[rgb(210,193,182)] to-[rgb(249,243,239)] text-[rgb(27,60,83)]'}`}>
      {/* Header */}
      <header className={`backdrop-blur-md shadow-lg border-b sticky top-0 z-10 transition-colors duration-300 ${isDarkMode ? 'bg-black/80 border-gray-800' : 'bg-[rgb(249,243,239)]/80 border-[rgb(210,193,182)]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/cart">
                <Button variant="ghost" size="sm" className={`flex items-center space-x-2 ${isDarkMode ? 'text-white hover:bg-gray-800' : 'text-[rgb(69,104,130)] hover:bg-[rgb(210,193,182)]'}`}>
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Cart</span>
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-[rgb(27,60,83)] to-[rgb(69,104,130)] p-2 rounded-full">
                  <span className="text-lg font-bold text-white">🍽️</span>
                </div>
                <span className={`text-xl font-bold bg-gradient-to-r from-[rgb(27,60,83)] to-[rgb(69,104,130)] bg-clip-text text-transparent ${isDarkMode ? 'text-white' : ''}`}>BiteBuddy</span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className={`h-8 w-8 p-0 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-[rgb(210,193,182)]'}`}
            >
              {isDarkMode ? <Sun className="h-4 w-4 text-white" /> : <Moon className="h-4 w-4 text-[rgb(69,104,130)]" />}
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>
            Complete Your Order
          </h1>
          <p className={isDarkMode ? 'text-gray-300' : 'text-[rgb(69,104,130)]'}>
            Choose your payment method and delivery details
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Delivery Information */}
          <Card className={`transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-[rgb(210,193,182)]'}`}>
            <CardHeader>
              <CardTitle className={`flex items-center space-x-2 ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>
                <MapPin className="h-5 w-5" />
                <span>Delivery Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className={isDarkMode ? 'text-gray-300' : 'text-[rgb(69,104,130)]'}>
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={deliveryInfo.name}
                    onChange={(e) => setDeliveryInfo({...deliveryInfo, name: e.target.value})}
                    className={isDarkMode ? 'bg-gray-800 border-gray-600 text-white' : 'border-[rgb(210,193,182)]'}
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className={isDarkMode ? 'text-gray-300' : 'text-[rgb(69,104,130)]'}>
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    value={deliveryInfo.phone}
                    onChange={(e) => setDeliveryInfo({...deliveryInfo, phone: e.target.value})}
                    className={isDarkMode ? 'bg-gray-800 border-gray-600 text-white' : 'border-[rgb(210,193,182)]'}
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className={isDarkMode ? 'text-gray-300' : 'text-[rgb(69,104,130)]'}>
                  Email (Optional)
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={deliveryInfo.email}
                  onChange={(e) => setDeliveryInfo({...deliveryInfo, email: e.target.value})}
                  className={isDarkMode ? 'bg-gray-800 border-gray-600 text-white' : 'border-[rgb(210,193,182)]'}
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <Label htmlFor="address" className={isDarkMode ? 'text-gray-300' : 'text-[rgb(69,104,130)]'}>
                  Delivery Address *
                </Label>
                <Textarea
                  id="address"
                  value={deliveryInfo.address}
                  onChange={(e) => setDeliveryInfo({...deliveryInfo, address: e.target.value})}
                  className={isDarkMode ? 'bg-gray-800 border-gray-600 text-white' : 'border-[rgb(210,193,182)]'}
                  placeholder="Enter your complete delivery address"
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="instructions" className={isDarkMode ? 'text-gray-300' : 'text-[rgb(69,104,130)]'}>
                  Delivery Instructions (Optional)
                </Label>
                <Textarea
                  id="instructions"
                  value={deliveryInfo.instructions}
                  onChange={(e) => setDeliveryInfo({...deliveryInfo, instructions: e.target.value})}
                  className={isDarkMode ? 'bg-gray-800 border-gray-600 text-white' : 'border-[rgb(210,193,182)]'}
                  placeholder="Any special instructions for delivery"
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card className={`transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-[rgb(210,193,182)]'}`}>
            <CardHeader>
              <CardTitle className={`flex items-center space-x-2 ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>
                <CreditCard className="h-5 w-5" />
                <span>Payment Method</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                <div className={`flex items-center space-x-2 p-4 rounded-lg border ${paymentMethod === 'upi' ? (isDarkMode ? 'border-purple-600 bg-purple-900/20' : 'border-[rgb(69,104,130)] bg-[rgb(249,243,239)]') : (isDarkMode ? 'border-gray-600' : 'border-[rgb(210,193,182)]')}`}>
                  <RadioGroupItem value="upi" id="upi" />
                  <Label htmlFor="upi" className={`flex items-center space-x-2 cursor-pointer ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>
                    <Smartphone className="h-4 w-4" />
                    <span>UPI Payment</span>
                  </Label>
                </div>

                <div className={`flex items-center space-x-2 p-4 rounded-lg border ${paymentMethod === 'card' ? (isDarkMode ? 'border-purple-600 bg-purple-900/20' : 'border-[rgb(69,104,130)] bg-[rgb(249,243,239)]') : (isDarkMode ? 'border-gray-600' : 'border-[rgb(210,193,182)]')}`}>
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className={`flex items-center space-x-2 cursor-pointer ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>
                    <CreditCard className="h-4 w-4" />
                    <span>Credit/Debit Card</span>
                  </Label>
                </div>

                <div className={`flex items-center space-x-2 p-4 rounded-lg border ${paymentMethod === 'netbanking' ? (isDarkMode ? 'border-purple-600 bg-purple-900/20' : 'border-[rgb(69,104,130)] bg-[rgb(249,243,239)]') : (isDarkMode ? 'border-gray-600' : 'border-[rgb(210,193,182)]')}`}>
                  <RadioGroupItem value="netbanking" id="netbanking" />
                  <Label htmlFor="netbanking" className={`flex items-center space-x-2 cursor-pointer ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>
                    <User className="h-4 w-4" />
                    <span>Net Banking</span>
                  </Label>
                </div>

                <div className={`flex items-center space-x-2 p-4 rounded-lg border ${paymentMethod === 'cod' ? (isDarkMode ? 'border-purple-600 bg-purple-900/20' : 'border-[rgb(69,104,130)] bg-[rgb(249,243,239)]') : (isDarkMode ? 'border-gray-600' : 'border-[rgb(210,193,182)]')}`}>
                  <RadioGroupItem value="cod" id="cod" />
                  <Label htmlFor="cod" className={`flex items-center space-x-2 cursor-pointer ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>
                    <Banknote className="h-4 w-4" />
                    <span>Cash on Delivery</span>
                  </Label>
                </div>
              </RadioGroup>

              {/* Order Summary */}
              <div className="mt-6 p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <h3 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>Order Summary</h3>
                
                {/* Cart Items */}
                {cartItems.length > 0 && (
                  <div className="mb-4 space-y-2">
                    {cartItems.map((item) => (
                      <div key={item.id} className={`flex justify-between items-center text-sm ${isDarkMode ? 'text-gray-300' : 'text-[rgb(69,104,130)]'}`}>
                        <div className="flex-1">
                          <span className="font-medium">{item.name}</span>
                          <span className="text-xs text-gray-500 ml-2">x{item.quantity}</span>
                        </div>
                        <span>₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                    <div className={`border-t pt-2 mt-2 ${isDarkMode ? 'border-gray-600' : 'border-[rgb(210,193,182)]'}`} />
                  </div>
                )}
                
                <div className={`space-y-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-[rgb(69,104,130)]'}`}>
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>₹{deliveryFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>₹{tax}</span>
                  </div>
                  <div className={`flex justify-between font-bold text-lg border-t pt-2 ${isDarkMode ? 'text-white border-gray-600' : 'text-[rgb(27,60,83)] border-[rgb(210,193,182)]'}`}>
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>
              </div>

              <Button
                onClick={handlePayment}
                className="w-full mt-6 bg-gradient-to-r from-[rgb(27,60,83)] to-[rgb(69,104,130)] hover:from-[rgb(69,104,130)] hover:to-[rgb(27,60,83)] text-white py-6 text-lg"
              >
                Place Order - ₹{total}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Payment;
