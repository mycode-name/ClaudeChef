const IngredientsList = (props) => {

  const ingredientList = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>));


  return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list">{ingredientList}</ul>
            {props.ingredients.length>2 && <div className="get-recipe-container">
                <div ref={props.ref} className="get-recipe-info">
                    <h3>Ready for a recipe</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={props.getRecipe}>Get a Recipe</button>
            </div>}
        </section>
  )};

export default IngredientsList