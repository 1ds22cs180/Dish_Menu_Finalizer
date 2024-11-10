import React from 'react';

const FinalizeMenu = ({ finalizedDishes }) => {
  return (
    <div>
      <h2>Finalized Menu</h2>
      <ul>
        {finalizedDishes.map((dish, index) => (
          <li key={index}>{dish.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FinalizeMenu;
