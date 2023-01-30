import React, { useEffect, useState } from 'react';

import TextField from '@mui/material/TextField';
import './inputSearch.scss';
import { Button } from '@mui/material';
import { fetchRecipes } from '../../apis/fetchRecipes';
import { useDispatch } from 'react-redux';
import { searchRecipeAction, lastSearchAction } from '../../store/actions';

const InputSearch = () => {
  const [recipeName, setRecipeName] = useState('');
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    setRecipeName(event.target.value);
  };

  const handleOnClick = () => {
    dispatch(lastSearchAction(recipeName));
    const drinksList = fetchRecipes(recipeName);

    drinksList.then((data) => dispatch(searchRecipeAction(data)));
  };

  useEffect(() => {

    const drinksList = fetchRecipes('margarita');

    drinksList.then((data) => dispatch(searchRecipeAction(data)));




  })

  return (
    <div className="inputSearch">
      <div className="textFieldContainer">
        <TextField
          value={recipeName}
          onChange={handleOnChange}
          id="outlined-basic"
          label="search cocktail"
          variant="outlined"
          fullWidth
        />
      </div>

      <Button onClick={handleOnClick} className="btnSearch" variant="contained">
        Search
      </Button>
    </div>
  );
};

export default InputSearch;
