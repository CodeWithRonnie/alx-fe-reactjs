import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import EditRecipeForm from "./components/EditRecipeForm";
import DeleteRecipeButton from "./components/DeleteRecipeButton";

function App() {
  return (
    <Router>
      <h1>Recipe Sharing App</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/recipe/:id/edit" element={<EditRecipeForm />} />
        <Route path="/recipe/:id/delete" element={<DeleteRecipeButton />} />
      </Routes>
    </Router>
  );
}

export default App;
