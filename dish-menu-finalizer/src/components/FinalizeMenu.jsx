//import React from 'react';
import PropTypes from 'prop-types';

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

FinalizeMenu.propTypes = {
  finalizedDishes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

export default FinalizeMenu;