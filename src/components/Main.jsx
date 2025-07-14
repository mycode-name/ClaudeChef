import {useState} from 'react';
import IngredientsList from './IngredientsList';
import ClaudeRecipe from './ClaudeRecipe';
import { getRecipeFromMistral } from '../../ai';

const Main = () => {

  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");

  async function getRecipe() {
      const recipeMarkdown = await getRecipeFromMistral(ingredients)
      setRecipe(recipeMarkdown);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient").trim();
    if (newIngredient) {
      if (ingredients.includes(newIngredient)) {
        alert("Ingredient already exists");
        return;
      }
      setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }
  }


  return (
    <main>
        <form action={addIngredient} className="add-ingredient-form">
            <input required type="text" aria-label="Add ingredient" placeholder="e.g. tomatos" name="ingredient" />
            <button>Add Ingredients</button>
        </form>
        {ingredients.length>0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe}/>}
        {recipe && <ClaudeRecipe recipe={recipe}/>}
    </main>
  )
}

export default Main