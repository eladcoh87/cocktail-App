import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

const IngredientList = () => {
  const chosenCocktail = useSelector((state) => state.chosenCocktail);

  const ingrdeintList = [];
  const mesurmantList = [];

  for (const [key, value] of Object.entries(chosenCocktail)) {
    const ingredientNew = key.slice(0, -1);
    const measureNew = key.slice(0, -1);

    if (ingredientNew.toLowerCase() === 'stringredient' && value) {
      ingrdeintList.push(value);
    }

    if (measureNew.toLowerCase() === 'strmeasure' && value) {
      mesurmantList.push(value);
    }
  }

  const renderedList = ingrdeintList.map((ingrdeint, index) => {
    if (!mesurmantList[index]) {
      return ingrdeint;
    }
    const newString = ingrdeint + ' ' + mesurmantList[index];

    return newString;
  });

  return (
    <div className="IngredientListContainer">
      <ul>
        {renderedList.map((ingredint) => (
          <li key={ingredint}>{ingredint}</li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
