
import { Card } from "@/components/ui/card";

interface FoodCollageProps {
  isDarkMode: boolean;
}

const FoodCollage = ({ isDarkMode }: FoodCollageProps) => {
  const foodImages = [
    {
      src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop&q=80",
      alt: "Pizza",
      category: "Pizza"
    },
    {
      src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop&q=80",
      alt: "Burger",
      category: "Burgers"
    },
    {
      src: "https://images.unsplash.com/photo-1565299585323-38174c4a6779?w=400&h=300&fit=crop&q=80",
      alt: "Tacos",
      category: "Mexican"
    },
    {
      src: "https://images.unsplash.com/photo-1617196034796-73989e891b8e?w=400&h=300&fit=crop&q=80",
      alt: "Chinese Food",
      category: "Chinese"
    },
    {
      src: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop&q=80",
      alt: "Indian Food",
      category: "Indian"
    },
    {
      src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop&q=80",
      alt: "Coffee",
      category: "Coffee"
    }
  ];

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
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 lg:gap-4">
        {foodImages.map((image, index) => (
          <Card 
            key={index} 
            className={`overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in group ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
            style={{animationDelay: `${index * 100}ms`}}
          >
            <div className="relative h-32 sm:h-40 lg:h-48">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <h3 className="text-white text-xs sm:text-sm font-semibold truncate">
                  {image.category}
                </h3>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FoodCollage;
