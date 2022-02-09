import recipes from "../dataRecipes";
import RecipesCard from "./RecipesCard";

function RecipesCards() {
  const recipesList = recipes.map((recipes) => (
    <RecipesCard recipes={recipes} />
  ));

  return (
    <div className="recipesCards" key={"recipesList"}>
      {recipesList}
    </div>
  );
}

export default RecipesCards;
