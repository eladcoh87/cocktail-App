import React from 'react';
import IngredientList from '../IngredientList/IngredientList';
import RecipeImage from '../RecipeImage/RecipeImage';
import RecipesList from '../RecipesList/RecipesList';
import './style.scss';

const MainSection = () => {
  return (
    <div className="mainSectionContainer">
      <RecipesList />
      <RecipeImage />
      <IngredientList />
    </div>
  );
};

export default MainSection;
