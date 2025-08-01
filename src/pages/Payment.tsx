
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, Smartphone, Banknote, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

const Payment = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);

  const deliveryFee = 60;
  const tax = Math.round(getTotalPrice() * 0.1);
  const total = getTotalPrice() + deliveryFee + tax;

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Order Placed Successfully! 🎉",
        description: "Your delicious meal is being prepared",
        duration: 3000,
      });
      clearCart();
      navigate("/order-tracking");
    }, 2000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingCart className="h-16 w-16 mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some delicious items to your cart first!</p>
          <Link to="/">
            <Button>Browse Restaurants</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/cart">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Cart</span>
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="text-2xl">🍽️</div>
                <span className="text-xl font-bold text-gray-900">Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Form */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 border rounded-lg">
                    <RadioGroupItem value="card" id="card" />
                    <CreditCard className="h-5 w-5 text-gray-600" />
                    <Label htmlFor="card" className="flex-1 cursor-pointer">Credit/Debit Card</Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg">
                    <RadioGroupItem value="upi" id="upi" />
                    <Smartphone className="h-5 w-5 text-gray-600" />
                    <Label htmlFor="upi" className="flex-1 cursor-pointer">UPI Payment</Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg">
                    <RadioGroupItem value="cod" id="cod" />
                    <Banknote className="h-5 w-5 text-gray-600" />
                    <Label htmlFor="cod" className="flex-1 cursor-pointer">Cash on Delivery</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {paymentMethod === "card" && (
              <Card>
                <CardHeader>
                  <CardTitle>Card Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePayment} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Cardholder Name</Label>
                      <Input
                        id="cardName"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isProcessing}>
                      {isProcessing ? "Processing..." : `Pay ₹${total.toFixed(2)}`}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}

            {paymentMethod === "upi" && (
              <Card>
                <CardHeader>
                  <CardTitle>UPI Payment</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePayment} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="upiId">UPI ID</Label>
                      <Input
                        id="upiId"
                        placeholder="your-upi@paytm"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isProcessing}>
                      {isProcessing ? "Processing..." : `Pay ₹${total.toFixed(2)}`}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}

            {paymentMethod === "cod" && (
              <Card>
                <CardHeader>
                  <CardTitle>Cash on Delivery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    You will pay ₹{total.toFixed(2)} when your order is delivered.
                  </p>
                  <Button onClick={handlePayment} className="w-full" disabled={isProcessing}>
                    {isProcessing ? "Processing..." : "Place Order"}
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div key={`${item.id}-${item.restaurantId}`} className="flex justify-between items-center">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <p className="text-xs text-gray-600">{item.restaurant}</p>
                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                      </div>
                      <span className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>₹{getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Delivery Fee</span>
                    <span>₹{deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>GST</span>
                    <span>₹{tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
