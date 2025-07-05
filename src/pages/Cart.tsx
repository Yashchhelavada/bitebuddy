
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Minus, Trash2, ShoppingBag, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } = useCart();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      return true;
    }
    return false;
  });

  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState("");
  const [discount, setDiscount] = useState(0);

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

  const promoCodes = {
    "SAVE10": 10,
    "WELCOME20": 20,
    "FIRST50": 50
  };

  const applyPromoCode = () => {
    if (promoCodes[promoCode as keyof typeof promoCodes]) {
      const discountAmount = promoCodes[promoCode as keyof typeof promoCodes];
      setAppliedPromo(promoCode);
      setDiscount(discountAmount);
      toast({
        title: "Promo code applied! 🎉",
        description: `₹${discountAmount} discount applied`,
        duration: 3000,
      });
    } else {
      toast({
        title: "Invalid promo code",
        description: "Please enter a valid promo code",
        duration: 2000,
      });
    }
  };

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };

  const handleRemoveItem = (id: number) => {
    const item = cartItems.find(item => item.id === id);
    removeFromCart(id);
    toast({
      title: "Item removed",
      description: `${item?.name} removed from cart`,
      duration: 2000,
    });
  };

  const subtotal = getTotalPrice();
  const deliveryFee = cartItems.length > 0 ? 49 : 0;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + deliveryFee + tax - discount;

  const handlePay = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart first",
        duration: 2000,
      });
      return;
    }
    navigate('/payment');
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
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag className={`h-24 w-24 mx-auto mb-4 ${isDarkMode ? 'text-gray-600' : 'text-gray-300'}`} />
            <h2 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Your cart is empty</h2>
            <p className={`mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Looks like you haven't added anything to your cart yet</p>
            <Link to="/">
              <Button className="bg-gradient-to-r from-[rgb(27,60,83)] to-[rgb(69,104,130)] hover:from-[rgb(69,104,130)] hover:to-[rgb(27,60,83)] text-white">
                Start Ordering
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <h1 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Your Cart</h1>
              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <Card key={item.id} className={`animate-fade-in transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-[rgb(210,193,182)]'}`} style={{animationDelay: `${index * 100}ms`}}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                          onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=100&h=100&fit=crop&q=80";
                          }}
                        />
                        <div className="flex-1">
                          <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.name}</h3>
                          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.restaurant}</p>
                          <p className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>₹{item.price}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                            className={`h-8 w-8 p-0 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-[rgb(210,193,182)] hover:bg-[rgb(210,193,182)]'}`}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className={`text-sm font-medium min-w-[20px] text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            {item.quantity}
                          </span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                            className={`h-8 w-8 p-0 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-[rgb(210,193,182)] hover:bg-[rgb(210,193,182)]'}`}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleRemoveItem(item.id)}
                            className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className={`sticky top-24 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-[rgb(210,193,182)]'}`}>
                <CardHeader>
                  <CardTitle className={isDarkMode ? 'text-white' : 'text-gray-900'}>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Promo Code Section */}
                  <div className="space-y-2">
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Enter promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                        className={isDarkMode ? 'bg-gray-800 border-gray-600 text-white' : 'border-[rgb(210,193,182)]'}
                      />
                      <Button 
                        onClick={applyPromoCode}
                        className="bg-gradient-to-r from-[rgb(27,60,83)] to-[rgb(69,104,130)] hover:from-[rgb(69,104,130)] hover:to-[rgb(27,60,83)] text-white"
                      >
                        Apply
                      </Button>
                    </div>
                    {appliedPromo && (
                      <Badge className="bg-green-100 text-green-800">
                        {appliedPromo} applied!
                      </Badge>
                    )}
                  </div>
                  
                  <Separator />
                  
                  <div className={`flex justify-between text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  {deliveryFee > 0 && (
                    <div className={`flex justify-between text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <span>Delivery Fee</span>
                      <span>₹{deliveryFee}</span>
                    </div>
                  )}
                  <div className={`flex justify-between text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <span>Tax</span>
                    <span>₹{tax}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Discount</span>
                      <span>-₹{discount}</span>
                    </div>
                  )}
                  <Separator />
                  <div className={`flex justify-between font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-[rgb(27,60,83)] to-[rgb(69,104,130)] hover:from-[rgb(69,104,130)] hover:to-[rgb(27,60,83)] text-white py-6 text-lg"
                    onClick={handlePay}
                  >
                    Pay Now
                  </Button>
                  <p className={`text-xs text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Secure payment with multiple options available
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
