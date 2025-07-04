
export const restaurantMenus = {
  // Pizza Restaurants
  1: { // Pizza Hut
    name: "Pizza Hut",
    items: [
      { id: 1, name: "Margherita Pizza", description: "Classic pizza with tomato sauce, mozzarella cheese and fresh basil", price: 499, category: "Pizza", image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=300&h=200&fit=crop", popular: true },
      { id: 2, name: "Pepperoni Pizza", description: "Spicy pepperoni with mozzarella cheese and signature sauce", price: 649, category: "Pizza", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&h=200&fit=crop", popular: true },
      { id: 3, name: "Supreme Pizza", description: "Loaded with pepperoni, sausage, bell peppers, onions and mushrooms", price: 799, category: "Pizza", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop" },
      { id: 4, name: "Garlic Bread", description: "Freshly baked bread with garlic butter and herbs", price: 229, category: "Sides", image: "https://images.unsplash.com/photo-1549300461-11c5b94839d3?w=300&h=200&fit=crop" },
      { id: 5, name: "Coca Cola", description: "Refreshing cold beverage", price: 119, category: "Drinks", image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=300&h=200&fit=crop" }
    ]
  },
  3: { // Domino's Pizza
    name: "Domino's Pizza",
    items: [
      { id: 10, name: "Farmhouse Pizza", description: "Fresh vegetables with cheese and signature sauce", price: 549, category: "Pizza", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop", popular: true },
      { id: 11, name: "Chicken Dominator", description: "Loaded with grilled chicken and exotic toppings", price: 749, category: "Pizza", image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=300&h=200&fit=crop", popular: true },
      { id: 12, name: "Veg Extravaganza", description: "Black olives, capsicum, onions, grilled mushrooms, corn, tomatoes, jalapeno", price: 629, category: "Pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop" },
      { id: 13, name: "Garlic Breadsticks", description: "Soft breadsticks with garlic seasoning", price: 199, category: "Sides", image: "https://images.unsplash.com/photo-1549300461-11c5b94839d3?w=300&h=200&fit=crop" },
      { id: 14, name: "Pepsi", description: "Chilled cola drink", price: 99, category: "Drinks", image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=300&h=200&fit=crop" }
    ]
  },
  // Burger Restaurants
  2: { // McDonald's
    name: "McDonald's",
    items: [
      { id: 6, name: "Big Mac", description: "Two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun", price: 389, category: "Burgers", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop", popular: true },
      { id: 7, name: "Quarter Pounder", description: "Fresh beef burger with cheese, onions, pickles, ketchup and mustard", price: 429, category: "Burgers", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&h=200&fit=crop", popular: true },
      { id: 8, name: "McFries Large", description: "Golden crispy french fries with the perfect amount of salt", price: 169, category: "Sides", image: "https://images.unsplash.com/photo-1576107232684-1279f390b3d6?w=300&h=200&fit=crop" },
      { id: 9, name: "McFlurry Oreo", description: "Vanilla soft serve with Oreo cookie pieces", price: 199, category: "Desserts", image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=300&h=200&fit=crop" }
    ]
  },
  6: { // Burger King
    name: "Burger King",
    items: [
      { id: 22, name: "Whopper", description: "Flame-grilled beef patty with tomatoes, lettuce, mayo, ketchup, pickles, onions", price: 399, category: "Burgers", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&h=200&fit=crop", popular: true },
      { id: 23, name: "Chicken Royale", description: "Crispy chicken fillet with lettuce and mayo", price: 349, category: "Burgers", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop", popular: true },
      { id: 24, name: "Veg Whopper", description: "Plant-based patty with all the classic Whopper toppings", price: 329, category: "Burgers", image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=300&h=200&fit=crop" },
      { id: 25, name: "Onion Rings", description: "Crispy golden onion rings", price: 149, category: "Sides", image: "https://images.unsplash.com/photo-1639024471283-03418e777bb1?w=300&h=200&fit=crop" }
    ]
  },
  // Taco Bell
  7: { // Taco Bell
    name: "Taco Bell",
    items: [
      { id: 26, name: "Crunchy Taco Supreme", description: "Seasoned beef, lettuce, tomatoes, cheese, and sour cream in a crunchy shell", price: 219, category: "Tacos", image: "https://images.unsplash.com/photo-1565299585323-38174c4a6779?w=300&h=200&fit=crop", popular: true },
      { id: 27, name: "Chicken Quesadilla", description: "Grilled chicken with melted cheese in a flour tortilla", price: 329, category: "Mexican", image: "https://images.unsplash.com/photo-1571197119282-7c4b999c2382?w=300&h=200&fit=crop", popular: true },
      { id: 28, name: "Beef Burrito", description: "Seasoned beef with rice, beans, and cheese wrapped in a flour tortilla", price: 289, category: "Mexican", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop" },
      { id: 29, name: "Nachos Supreme", description: "Crispy nachos with cheese, beef, beans, tomatoes, and sour cream", price: 279, category: "Sides", image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=300&h=200&fit=crop" }
    ]
  },
  // Chinese Restaurants
  15: { // Panda Express
    name: "Panda Express",
    items: [
      { id: 40, name: "Orange Chicken", description: "Crispy chicken pieces with sweet and tangy orange sauce", price: 349, category: "Chinese", image: "https://images.unsplash.com/photo-1617196034796-73989e891b8e?w=300&h=200&fit=crop", popular: true },
      { id: 41, name: "Chow Mein", description: "Stir-fried noodles with vegetables and choice of protein", price: 299, category: "Chinese", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=300&h=200&fit=crop", popular: true },
      { id: 42, name: "Fried Rice", description: "Wok-fried rice with eggs, vegetables and soy sauce", price: 249, category: "Chinese", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop" },
      { id: 43, name: "Sweet & Sour Pork", description: "Crispy pork with bell peppers and pineapple in sweet sauce", price: 379, category: "Chinese", image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=300&h=200&fit=crop" },
      { id: 44, name: "Hot Tea", description: "Traditional Chinese hot tea", price: 89, category: "Drinks", image: "https://images.unsplash.com/photo-1597318181469-1d4a2e6a451b?w=300&h=200&fit=crop" }
    ]
  },
  16: { // China Garden
    name: "China Garden",
    items: [
      { id: 45, name: "Kung Pao Chicken", description: "Diced chicken with peanuts and chili peppers in savory sauce", price: 389, category: "Chinese", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=300&h=200&fit=crop", popular: true },
      { id: 46, name: "Mapo Tofu", description: "Silky tofu in spicy Sichuan sauce", price: 299, category: "Chinese", image: "https://images.unsplash.com/photo-1617196034796-73989e891b8e?w=300&h=200&fit=crop" },
      { id: 47, name: "Spring Rolls", description: "Crispy vegetable spring rolls with sweet chili sauce", price: 199, category: "Appetizers", image: "https://images.unsplash.com/photo-1536304447766-da0ed4ce1b73?w=300&h=200&fit=crop" },
      { id: 48, name: "Jasmine Tea", description: "Fragrant jasmine tea", price: 79, category: "Drinks", image: "https://images.unsplash.com/photo-1597318181469-1d4a2e6a451b?w=300&h=200&fit=crop" }
    ]
  },
  // Indian Restaurants
  20: { // Spice Route
    name: "Spice Route",
    items: [
      { id: 50, name: "Butter Chicken", description: "Tender chicken in rich tomato and cream sauce", price: 399, category: "Indian", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=200&fit=crop", popular: true },
      { id: 51, name: "Paneer Makhani", description: "Cottage cheese in creamy tomato gravy", price: 349, category: "Indian", image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=300&h=200&fit=crop", popular: true },
      { id: 52, name: "Naan Bread", description: "Soft Indian bread baked in tandoor", price: 89, category: "Bread", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop" },
      { id: 53, name: "Basmati Rice", description: "Fragrant long-grain rice", price: 149, category: "Rice", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop" },
      { id: 54, name: "Mango Lassi", description: "Sweet yogurt drink with mango", price: 129, category: "Drinks", image: "https://images.unsplash.com/photo-1571197119282-7c4b999c2382?w=300&h=200&fit=crop" }
    ]
  },
  24: { // Biryani Paradise
    name: "Biryani Paradise",
    items: [
      { id: 55, name: "Hyderabadi Biryani", description: "Aromatic basmati rice with tender mutton and spices", price: 499, category: "Biryani", image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop", popular: true },
      { id: 56, name: "Chicken Biryani", description: "Fragrant rice with marinated chicken and saffron", price: 449, category: "Biryani", image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop", popular: true },
      { id: 57, name: "Veg Biryani", description: "Mixed vegetables with aromatic basmati rice", price: 349, category: "Biryani", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop" },
      { id: 58, name: "Raita", description: "Cooling yogurt with cucumber and mint", price: 99, category: "Sides", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop" },
      { id: 59, name: "Chai", description: "Traditional Indian spiced tea", price: 49, category: "Drinks", image: "https://images.unsplash.com/photo-1597318181469-1d4a2e6a451b?w=300&h=200&fit=crop" }
    ]
  },
  // Coffee Shops
  8: { // Starbucks
    name: "Starbucks",
    items: [
      { id: 30, name: "Caffe Latte", description: "Rich espresso with steamed milk and a light layer of foam", price: 329, category: "Coffee", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=300&h=200&fit=crop", popular: true },
      { id: 31, name: "Cappuccino", description: "Espresso with steamed milk and thick foam", price: 299, category: "Coffee", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=200&fit=crop", popular: true },
      { id: 32, name: "Frappuccino", description: "Blended coffee beverage with ice and whipped cream", price: 399, category: "Coffee", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop" },
      { id: 33, name: "Blueberry Muffin", description: "Freshly baked muffin with blueberries", price: 199, category: "Snacks", image: "https://images.unsplash.com/photo-1426869981800-95ebf51ce900?w=300&h=200&fit=crop" }
    ]
  }
};

export const getRestaurantMenu = (restaurantId: number) => {
  return restaurantMenus[restaurantId as keyof typeof restaurantMenus] || restaurantMenus[1];
};
