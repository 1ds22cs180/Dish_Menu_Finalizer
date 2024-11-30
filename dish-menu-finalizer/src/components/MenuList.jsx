//import React from 'react';
import PropTypes from 'prop-types';

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

MenuList.propTypes = {
  dishes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  onSelectDish: PropTypes.func.isRequired
};

export default MenuList;