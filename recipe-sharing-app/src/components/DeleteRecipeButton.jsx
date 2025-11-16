import { useNavigate, useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = () => {
  const { id } = useParams();
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(Number(id));
    navigate('/');
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
