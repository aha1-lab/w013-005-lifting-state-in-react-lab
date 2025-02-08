
function Ingredient ({ingredient, onClickHandler, isAdd}){

    return (
        <>
        <li style={{backgroundColor:ingredient.color}} key={ingredient.name}>
            {ingredient.name}
            <button onClick={()=>onClickHandler(ingredient.name)}>{isAdd ? "+" : "X"}</button>
        </li>
        </>
    );
};

export default Ingredient ;