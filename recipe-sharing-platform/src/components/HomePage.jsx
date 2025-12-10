import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="max-w-5xl mx-auto flex items-center justify-between mb-6">
        <h1 className="text-2xl sm:text-3xl font-semibold">Recipe Sharing Platform</h1>

        <nav>
          <Link
            to="/add"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
          >
            Add Recipe
          </Link>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto">
        <section className="mb-4">
          <p className="text-gray-600">
            Browse recipes shared by the community. Click a recipe to see details.
          </p>
        </section>

        <section>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {recipes.map((recipe) => (
              <article
                key={recipe.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition"
                aria-labelledby={`recipe-${recipe.id}-title`}
              >
                <Link to={`/recipe/${recipe.id}`} className="block">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-44 object-cover"
                    loading="lazy"
                  />

                  <div className="p-4">
                    <h2
                      id={`recipe-${recipe.id}-title`}
                      className="text-lg font-medium text-gray-900"
                    >
                      {recipe.title}
                    </h2>

                    <p className="mt-2 text-gray-600 text-sm line-clamp-3">
                      {recipe.summary}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-gray-500">{recipe.ingredients.length} ingredients</span>

                      <span className="text-sm text-blue-600 hover:underline">View →</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
