import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((s) => s.setSearchTerm);
  const filterRecipes = useRecipeStore((s) => s.filterRecipes);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes();
  };

  return <input type="text" placeholder="Search recipes..." onChange={handleChange} />;
};

export default SearchBar;
