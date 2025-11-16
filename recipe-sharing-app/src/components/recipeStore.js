import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  updateRecipe: (id, updatedData) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedData } : recipe
      ),
    })),

  // ❤️ FAVORITES
  favorites: [],

  addFavorite: (id) =>
    set((state) => ({
      favorites: [...state.favorites, id],
    })),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((fav) => fav !== id),
    })),

  toggleFavorite: (id) =>
    set((state) =>
      state.favorites.includes(id)
        ? { favorites: state.favorites.filter((fav) => fav !== id) }
        : { favorites: [...state.favorites, id] }
    ),

  // ⭐ RECOMMENDATIONS
  recommendations: [],

  generateRecommendations: () =>
    set((state) => {
      if (state.favorites.length === 0) return { recommendations: [] };

      // Mock logic: recommend recipes sharing the first favorite's first letter
      const favRecipes = state.recipes.filter((r) =>
        state.favorites.includes(r.id)
      );

      const keyLetter = favRecipes[0].title[0].toLowerCase();

      const recommended = state.recipes.filter(
        (recipe) =>
          recipe.title.toLowerCase().startsWith(keyLetter) &&
          !state.favorites.includes(recipe.id)
      );

      return { recommendations: recommended };
    }),
}));
