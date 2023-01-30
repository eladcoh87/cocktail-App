import React from 'react';
import { useDispatch } from 'react-redux';
import './style.scss';
import { choosenCocktailAction } from '../../store/actions';
import { searchRecipeAction } from '../../store/actions';

const RecipeItem = ({ cocktailName, imgThumb, date, idDrink }) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(choosenCocktailAction(idDrink));
  };

  return (
    <div onClick={handleOnClick} className="RecipeItemContainer">
      <div>
        <img src={imgThumb} alt="" />
      </div>

      <div>
        <h4>{cocktailName}</h4>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default RecipeItem;
