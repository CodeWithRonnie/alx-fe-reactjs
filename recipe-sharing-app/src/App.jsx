import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetail from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import DeleteRecipeButton from './components/DeleteRecipeButton';

function App() {
  return (
    <BrowserRouter>
      <h1>Recipe Sharing App</h1>

      <Routes>
        <Route path="/" element={<><AddRecipeForm /><RecipeList /></>} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
        <Route path="/recipes/:id/delete" element={<DeleteRecipeButton />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
