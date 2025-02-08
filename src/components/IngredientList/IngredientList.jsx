// src/components/IngredientList/IngredientList.jsx
import Ingredient from '../Ingredient'


const IngredientList = ({availableIngredients, addToBurger}) => {
    return (<ul>
        {availableIngredients.map((oneIngredient)=>
            <Ingredient ingredient={oneIngredient} onClickHandler={addToBurger} isAdd={true}/>
        )}
    </ul>);
  };
  
  export default IngredientList;
  