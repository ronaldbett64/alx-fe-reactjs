// src/components/RecommendationList.jsx
import useRecipeStore from './recipeStore';

const RecommendationList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  return (
    <div>
      <h2>Recommended Recipes</h2>
      <button onClick={generateRecommendations}>Get Recommendations</button>
      <ul>
        {recommendations.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationList;
