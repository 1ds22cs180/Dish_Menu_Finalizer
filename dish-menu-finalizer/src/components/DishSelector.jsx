import React, { useState } from 'react';

const DishSelector = ({ selectedDishes, onFinalize }) => {
  return (
    <div>
      <h2>Selected Dishes</h2>
      <ul>
        {selectedDishes.map((dish, index) => (
          <li key={index}>{dish.name}</li>
        ))}
      </ul>
      <button onClick={onFinalize}>Finalize Menu</button>
    </div>
  );
};

export default DishSelector;
