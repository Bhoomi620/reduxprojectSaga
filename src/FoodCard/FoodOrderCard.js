import React from 'react';

const FoodOrderCard = ({ foodItem }) => {
  const { name, description, price, image } = foodItem;

  return (
    <div className="food-card">
      <img src={image} alt={name} className="food-image" />
      <div className="food-details">
        <h2 className="food-name">{name}</h2>
        <p className="food-description">{description}</p>
        <p className="food-price">${price}</p>
        <button className="order-button">Order Now</button>
      </div>
    </div>
  );
};

export default FoodOrderCard;
