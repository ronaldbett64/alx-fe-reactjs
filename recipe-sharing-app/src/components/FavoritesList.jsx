import { useRecipeStore } from '../store/recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore((s) =>
    s.favorites.map((id) => s.recipes.find((r) => r.id === id))
  );

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map((r) => (
        <div key={r.id}>
          <h3>{r.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
