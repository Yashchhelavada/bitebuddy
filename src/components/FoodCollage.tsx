
import { Card } from "@/components/ui/card";

interface FoodCollageProps {
  isDarkMode: boolean;
}

const FoodCollage = ({ isDarkMode }: FoodCollageProps) => {
  return (
    <div className="mb-8 sm:mb-12 lg:mb-16">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 ${isDarkMode ? 'text-white' : 'text-[rgb(27,60,83)]'}`}>
          Delicious Food Awaits
        </h2>
        <p className={`text-sm sm:text-base lg:text-lg ${isDarkMode ? 'text-gray-300' : 'text-[rgb(69,104,130)]'}`}>
          Discover amazing flavors from your favorite restaurants
        </p>
      </div>
      
      {/* Food Collage Background */}
      <div 
        className="relative h-48 sm:h-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=600&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4 animate-fade-in">
              Fresh • Delicious • Fast
            </h3>
            <p className="text-sm sm:text-base lg:text-lg opacity-90 animate-fade-in" style={{animationDelay: '200ms'}}>
              Order from the best restaurants in your area
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCollage;
