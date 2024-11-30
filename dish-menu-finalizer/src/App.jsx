import { useState } from 'react';
import MenuList from './components/MenuList';
import DishSelector from './components/DishSelector';
import FinalizeMenu from './components/FinalizeMenu';
import './App.css';
const App = () => {
  const [dishes] = useState([
    { name: 'Pasta' },
    { name: 'Pizza' },
    { name: 'Salad' }
  ]);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [finalizedDishes, setFinalizedDishes] = useState([]);

  const handleSelectDish = (dish) => {
    setSelectedDishes((prev) => [...prev, dish]);
  };

  const handleFinalizeMenu = () => {
    setFinalizedDishes(selectedDishes);
    setSelectedDishes([]);
  };

  return (
    <div>
      <h1>Dish Menu Finalizer</h1>
      <body>
      <p>Welcome to Menu Finalizing Website</p>
      <h4>Instructions:</h4>
      <p>1. Select the dishes from the list.</p>
      <p>2. Click on the Add button to add the dish to the selected dishes list.</p>
      <p>3. Click on the Finalize Menu button to finalize the menu.</p>
      <p>4. The finalized menu will be displayed below the selected dishes list.</p>
      </body>
      <MenuList dishes={dishes} onSelectDish={handleSelectDish} />
      <DishSelector selectedDishes={selectedDishes} onFinalize={handleFinalizeMenu} />
      <FinalizeMenu finalizedDishes={finalizedDishes} />
    </div>
  );
};

export default App;
