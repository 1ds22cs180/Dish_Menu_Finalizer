import React from 'react';

const MenuList = ({ dishes, onSelectDish }) => {
  return (
    <div>
      <h2>Available Dishes</h2>
      <ul>
        {dishes.map((dish, index) => (
          <li key={index}>
            {dish.name}
            <button onClick={() => onSelectDish(dish)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
