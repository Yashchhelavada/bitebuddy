
import { Link } from "react-router-dom";
import { ArrowLeft, Search, HelpCircle, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Help = () => {
  const faqs = [
    {
      question: "How do I place an order?",
      answer: "Simply browse restaurants, select your favorite dishes, add them to cart, and proceed to checkout. You can track your order in real-time once placed."
    },
    {
      question: "What are the delivery charges?",
      answer: "Delivery charges vary by restaurant and distance, typically ranging from ₹30 to ₹80. The exact charge is shown before you place your order."
    },
    {
      question: "How long does delivery take?",
      answer: "Most orders are delivered within 20-45 minutes, depending on the restaurant and your location. You'll see estimated delivery time for each restaurant."
    },
    {
      question: "Can I track my order?",
      answer: "Yes! Once your order is confirmed, you can track it in real-time from preparation to delivery on our tracking page."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI payments, net banking, and popular digital wallets for your convenience."
    },
    {
      question: "Can I cancel my order?",
      answer: "You can cancel your order within 2-3 minutes of placing it. After that, cancellation depends on the restaurant's policy."
    },
    {
      question: "What if my order is incorrect or damaged?",
      answer: "Contact our support team immediately. We'll work with the restaurant to resolve the issue and may provide a refund or replacement."
    },
    {
      question: "Do you have minimum order requirements?",
      answer: "Minimum order requirements vary by restaurant. You'll see any minimum order amount on the restaurant's page before ordering."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-gray-900 dark:via-purple-950 dark:to-black transition-colors duration-300">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md dark:bg-black/80 shadow-lg border-b border-purple-200 dark:border-purple-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-purple-600 hover:bg-purple-100 dark:hover:bg-purple-900">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back</span>
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="text-2xl">🍽️</div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">BiteBuddy</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-purple-700 to-black text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Help Center</h1>
          <p className="text-xl opacity-90 mb-8">
            Find answers to your questions or get in touch with our support team
          </p>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search for help..."
              className="pl-10 py-3 text-lg bg-white text-gray-900 border-0 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Help Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Quick Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-colors duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Order Issues</h3>
                <p className="text-gray-600 dark:text-gray-300">Problems with your current or past orders</p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-colors duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Live Chat</h3>
                <p className="text-gray-600 dark:text-gray-300">Chat with our support team instantly</p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-colors duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Call Support</h3>
                <p className="text-gray-600 dark:text-gray-300">Speak directly with our support team</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Frequently Asked Questions</h2>
          <Card className="border-purple-200 dark:border-purple-800">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="space-y-2">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-purple-200 dark:border-purple-800">
                    <AccordionTrigger className="text-left hover:text-purple-600 dark:hover:text-purple-400">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Contact Support */}
        <section className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-950 dark:to-black border-purple-200 dark:border-purple-800">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Still need help?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our support team is available 24/7 to help you with any questions or issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900">
                    Contact Support
                  </Button>
                </Link>
                <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50 dark:border-purple-600 dark:text-purple-400 dark:hover:bg-purple-900">
                  Call +91 98765 43210
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Help;
