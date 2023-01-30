import React from 'react';
import { useSelector } from 'react-redux';
import RecipeItem from '../RecipeItem/RecipeItem';
import './style.scss';

const RecipesList = () => {
  const drinkList = useSelector((state) => state.searchRecipeList);

  let renderList;

  if (drinkList) {
    renderList = drinkList.map((cocktail) => {
      return (
        <RecipeItem
          key={cocktail.idDrink}
          cocktailName={cocktail.strDrink}
          imgThumb={cocktail.strDrinkThumb || 'no image'}
          date={cocktail.dateModified}
          idDrink={cocktail.idDrink}
        />
      );
    });
  }

  return <div className="RecipesListContainer">{renderList}</div>;
};

export default RecipesList;
