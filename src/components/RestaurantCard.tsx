
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Truck } from "lucide-react";
import { Link } from "react-router-dom";

interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  image: string;
  isOpen: boolean;
}

interface RestaurantCardProps {
  restaurant: Restaurant;
  animationDelay?: number;
}

const RestaurantCard = ({ restaurant, animationDelay = 0 }: RestaurantCardProps) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop'; // Restaurant placeholder
  };

  return (
    <Link to={`/restaurant/${restaurant.id}`}>
      <Card 
        className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 animate-fade-in dark:bg-gray-800 dark:border-gray-700" 
        style={{animationDelay: `${animationDelay}ms`}}
      >
        <div className="relative">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-36 sm:h-40 md:h-48 object-cover"
            onError={handleImageError}
          />
          {!restaurant.isOpen && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <Badge variant="secondary" className="bg-gray-800 text-white">
                Closed
              </Badge>
            </div>
          )}
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="bg-white bg-opacity-90 text-gray-900">
              <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
              {restaurant.rating}
            </Badge>
          </div>
        </div>
        
        <CardContent className="p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 space-y-1 sm:space-y-0">
            <h3 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-white truncate">
              {restaurant.name}
            </h3>
            <Badge variant="outline" className="text-xs dark:border-gray-600 dark:text-gray-300 self-start sm:self-auto">
              {restaurant.cuisine}
            </Badge>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-gray-600 dark:text-gray-400 space-y-1 sm:space-y-0">
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Truck className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>{restaurant.deliveryFee}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default RestaurantCard;
