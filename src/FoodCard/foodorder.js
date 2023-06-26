import React from 'react';
import FoodOrderCard from './FoodOrderCard';

const App = () => {
  const foodData = [
    {
      name: 'Pizza',
      description: 'Delicious pizza with various toppings',
      price: 10.99,
      image: 'pizza.jpg'
    },
    {
      name: 'Burger',
      description: 'Juicy burger with all the fixings',
      price: 6.99,
      image: 'burger.jpg'
    }
  ];

  return (
    <div>
      {foodData.map((foodItem, index) => (
        <FoodOrderCard key={index} foodItem={foodItem} />
      ))}
    </div>
  );
};

export default App;
