
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
            className="w-full h-48 object-cover"
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
        
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white truncate">
              {restaurant.name}
            </h3>
            <Badge variant="outline" className="text-xs dark:border-gray-600 dark:text-gray-300">
              {restaurant.cuisine}
            </Badge>
          </div>
          
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Truck className="h-4 w-4" />
              <span>{restaurant.deliveryFee}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default RestaurantCard;
