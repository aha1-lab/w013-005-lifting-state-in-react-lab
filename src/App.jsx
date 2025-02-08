// src/App.jsx
import './App.css';
import IngredientList from './components/IngredientList/IngredientList';
import BurgerStack from './components/BurgerStack/BurgerStack';
import { useState } from 'react';

const App = () => {
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  let [ingredients, setIngredients] = useState(availableIngredients);
  let [stack, setStack] = useState("");

  function addToBurger(event){
    let addIngredient = ingredients.find((oneItem)=>{
      return oneItem.name === event;
    });
    setStack([...stack, addIngredient]);
  };

  function removeFromBurger(event){
    let removeIngriedient = stack.filter((oneItem)=>{
      return oneItem.name !== event;
    });

    setStack(removeIngriedient);
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      <IngredientList availableIngredients={ingredients} addToBurger={addToBurger} />
      <BurgerStack stack={stack} removeFromBurger={removeFromBurger}/>
      </section>
    </main>
  );
};

export default App;
