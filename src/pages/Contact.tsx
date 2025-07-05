
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Sun, Moon, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      return true;
    }
    return false;
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent! 📧",
      description: "We'll get back to you within 24 hours.",
      duration: 3000,
    });
    setFormData({ name: "", email: "", message: "" });
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>
            Contact Us
          </h1>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-[rgb(69,104,130)]'}`}>
            We'd love to hear from you. Get in touch with us!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className={`transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-[rgb(210,193,182)]'}`}>
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>
                  <Phone className={`h-5 w-5 ${isDarkMode ? 'text-white' : 'text-[rgb(69,104,130)]'}`} />
                  <span>Phone</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-[rgb(69,104,130)]'}`}>9328334151</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-[rgb(69,104,130)]'}`}>Available 24/7 for support</p>
              </CardContent>
            </Card>

            <Card className={`transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-[rgb(210,193,182)]'}`}>
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>
                  <Mail className={`h-5 w-5 ${isDarkMode ? 'text-white' : 'text-[rgb(69,104,130)]'}`} />
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-[rgb(69,104,130)]'}`}>ykchhelavada@gmail.com</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-[rgb(69,104,130)]'}`}>We'll respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card className={`transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-[rgb(210,193,182)]'}`}>
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>
                  <MapPin className={`h-5 w-5 ${isDarkMode ? 'text-white' : 'text-[rgb(69,104,130)]'}`} />
                  <span>Address</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-[rgb(69,104,130)]'}`}>Ahmedabad, Gujarat</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-[rgb(69,104,130)]'}`}>Serving delicious food across the city</p>
              </CardContent>
            </Card>

            <Card className={`transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-[rgb(210,193,182)]'}`}>
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>
                  <Clock className={`h-5 w-5 ${isDarkMode ? 'text-white' : 'text-[rgb(69,104,130)]'}`} />
                  <span>Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-[rgb(69,104,130)]'}`}>24/7</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-[rgb(69,104,130)]'}`}>Always here when you're hungry</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className={`transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-[rgb(210,193,182)]'}`}>
            <CardHeader>
              <CardTitle className={isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className={isDarkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'border-[rgb(210,193,182)]'}
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className={isDarkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'border-[rgb(210,193,182)]'}
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className={isDarkMode ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'border-[rgb(210,193,182)]'}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[rgb(27,60,83)] to-[rgb(69,104,130)] hover:from-[rgb(69,104,130)] hover:to-[rgb(27,60,83)] text-white"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
