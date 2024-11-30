import { useState } from 'react';
import PropTypes from 'prop-types';

const DishSelector = ({ selectedDishes, onFinalize }) => {
  const [dishName, setDishName] = useState('');

  const handleAddDish = () => {
    if (dishName.trim()) {
      selectedDishes.push({ name: dishName });
      setDishName('');
    }
  };

  return (
    <div>
      <h2>Selected Dishes</h2>
      <ul>
        {selectedDishes.map((dish, index) => (
          <li key={index}>{dish.name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={dishName}
        onChange={(e) => setDishName(e.target.value)}
        placeholder="Enter dish name"
      />
      <button onClick={handleAddDish}>Add</button>
      <button onClick={onFinalize}>Finalize Menu</button>
    </div>
  );
};

DishSelector.propTypes = {
  selectedDishes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  onFinalize: PropTypes.func.isRequired
};

export default DishSelector;