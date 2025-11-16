import { useParams, Link } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);

  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  if (!recipe) return <h2>Recipe not found</h2>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <h3>Edit This Recipe</h3>
      <EditRecipeForm recipe={recipe} />

      <DeleteRecipeButton recipeId={recipe.id} />

      <br />
      <Link to="/">⬅ Back to Home</Link>
    </div>
  );
};

export default RecipeDetails;
