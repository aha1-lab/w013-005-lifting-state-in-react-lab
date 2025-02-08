// src/components/BurgerStack/BurgerStack.jsx
import Ingredient from '../Ingredient'


const BurgerStack = ({stack, removeFromBurger}) => {
    return (
    <ul>
      {stack.length ===0 ? "No Ingredients’ is displayed " :
      stack.map((oneIngredient)=>
            <Ingredient ingredient={oneIngredient} onClickHandler={removeFromBurger} isAdd={false}/>
        )}
    </ul>);
  };
  
  export default BurgerStack;
  