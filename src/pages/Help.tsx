
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Sun, Moon, Search, HelpCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Help = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      return true;
    }
    return false;
  });

  const [searchTerm, setSearchTerm] = useState("");

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

  const faqItems = [
    {
      question: "How do I place an order?",
      answer: "Simply browse restaurants, add items to your cart, and proceed to checkout. You can track your order in real-time once placed."
    },
    {
      question: "What are the delivery charges?",
      answer: "Delivery charges vary by restaurant and distance, typically ranging from ₹40-₹80. Free delivery is available on orders above ₹500."
    },
    {
      question: "How long does delivery take?",
      answer: "Most orders are delivered within 30-45 minutes. Exact delivery time depends on restaurant preparation time and distance."
    },
    {
      question: "Can I cancel my order?",
      answer: "You can cancel your order within 2 minutes of placing it. After that, please contact customer support for assistance."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept UPI, credit/debit cards, net banking, and cash on delivery for your convenience."
    },
    {
      question: "How do I apply promo codes?",
      answer: "Enter your promo code in the cart page before checkout. Valid codes will automatically apply the discount."
    }
  ];

  const filteredFAQ = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>
            Help Center
          </h1>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-[rgb(69,104,130)]'}`}>
            Find answers to your questions and get support
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            <Input
              placeholder="Search for help..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`pl-10 ${isDarkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-[rgb(210,193,182)]'}`}
            />
          </div>
        </div>

        {/* Quick Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className={`transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-[rgb(210,193,182)]'}`}>
            <CardHeader>
              <CardTitle className={`flex items-center space-x-2 ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>
                <Phone className={`h-5 w-5 ${isDarkMode ? 'text-white' : 'text-[rgb(69,104,130)]'}`} />
                <span>Call Us</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-[rgb(69,104,130)]'}`}>9328334151</p>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-[rgb(69,104,130)]'}`}>Available 24/7 for urgent support</p>
            </CardContent>
          </Card>

          <Card className={`transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-[rgb(210,193,182)]'}`}>
            <CardHeader>
              <CardTitle className={`flex items-center space-x-2 ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>
                <Mail className={`h-5 w-5 ${isDarkMode ? 'text-white' : 'text-[rgb(69,104,130)]'}`} />
                <span>Email Us</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-[rgb(69,104,130)]'}`}>ykchhelavada@gmail.com</p>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-[rgb(69,104,130)]'}`}>We'll respond within 24 hours</p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <Card className={`transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-[rgb(210,193,182)]'}`}>
          <CardHeader>
            <CardTitle className={`flex items-center space-x-2 ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>
              <HelpCircle className={`h-5 w-5 ${isDarkMode ? 'text-white' : 'text-[rgb(69,104,130)]'}`} />
              <span>Frequently Asked Questions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {filteredFAQ.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className={isDarkMode ? 'text-white hover:text-gray-300' : 'text-[rgb(27,60,83)] hover:text-[rgb(69,104,130)]'}>
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className={isDarkMode ? 'text-gray-300' : 'text-[rgb(69,104,130)]'}>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Still Need Help */}
        <div className="text-center mt-12">
          <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>
            Still Need Help?
          </h2>
          <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-[rgb(69,104,130)]'}`}>
            Our support team is here to help you 24/7
          </p>
          <Link to="/contact">
            <Button className="bg-gradient-to-r from-[rgb(27,60,83)] to-[rgb(69,104,130)] hover:from-[rgb(69,104,130)] hover:to-[rgb(27,60,83)] text-white px-8 py-3 text-lg">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Help;
