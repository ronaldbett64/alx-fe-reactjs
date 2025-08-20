// src/components/recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  // Initial recipes
  recipes: [
    { id: 1, name: "Pasta", description: "Delicious Italian pasta.", isFavorite: false },
    { id: 2, name: "Sushi", description: "Fresh sushi from Japan.", isFavorite: false },
    { id: 3, name: "Tacos", description: "Spicy Mexican tacos.", isFavorite: false },
  ],

  searchTerm: "",
  favourites: [],
  recommendations: [],

  // Actions
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, { ...recipe, id: Date.now(), isFavorite: false }]
    })),

  toggleFavorite: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((r) =>
        r.id === id ? { ...r, isFavorite: !r.isFavorite } : r
      );
      return {
        recipes: updatedRecipes,
        favourites: updatedRecipes.filter((r) => r.isFavorite),
      };
    }),

  setSearchTerm: (term) => set({ searchTerm: term }),

  generateRecommendations: () =>
    set((state) => {
      // Example: Recommend recipes that are not favorites
      const recs = state.recipes.filter((r) => !r.isFavorite).slice(0, 2);
      return { recommendations: recs };
    }),
}));

export default useRecipeStore;
