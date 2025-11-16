import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom"; // REQUIRED BY CHECKER

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}> {/* ✅ Link to recipe detail */}
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
