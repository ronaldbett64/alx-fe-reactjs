// src/components/FavouritesList.jsx
import useRecipeStore from './recipeStore';

const FavouritesList = () => {
  const favourites = useRecipeStore((state) => state.favourites);

  if (favourites.length === 0) {
    return <p>No favourites yet. Mark some recipes as favourites!</p>;
  }

  return (
    <div>
      <h2>My Favourites</h2>
      <ul>
        {favourites.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavouritesList;
