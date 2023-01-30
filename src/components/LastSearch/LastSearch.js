import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import { fetchRecipes } from '../../apis/fetchRecipes';
import { searchRecipeAction } from '../../store/actions';

const LastSearch = () => {
  const lastSearchList = useSelector((state) => state.lastSearchList);
  const dispatch = useDispatch();

  const handleOnClick = (lastSearch) => {
    const lastSearchApi = fetchRecipes(lastSearch);

    lastSearchApi.then((data) => dispatch(searchRecipeAction(data)));
  };

  return (
    <div className="lastsearchcontainer">
      <div className="lastItemContainer">
        {lastSearchList.map((lastSearch) => (
          <div
            key={Math.floor(Math.random() * 100434)}
            onClick={() => handleOnClick(lastSearch)}
            className="lastItem"
          >
            {lastSearch}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastSearch;
