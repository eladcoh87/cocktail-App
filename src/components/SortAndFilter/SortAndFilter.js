import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import {
  filteredListAction,
  aToZAction,
  dateSortAction,
} from '../../store/actions';

const SortAndFilter = () => {
  const [sortOptsion, setSortOptsion] = useState('');
  const [filterIngredint, setFilterIngredint] = useState('');

  const dispatch = useDispatch();

  const cocktailList = useSelector((state) => state.searchRecipeList);

  const handleOnChangeOptions = (event) => {
    setSortOptsion(event.target.value);

    if (event.target.value === 'A_TO_Z') {
      function compare(a, b) {
        if (a.strDrink < b.strDrink) {
          return -1;
        }
        if (a.strDrink > b.strDrink) {
          return 1;
        }
        return 0;
      }

      cocktailList.sort(compare);

      const aToZCocktailList = cocktailList.sort(compare);

      dispatch(aToZAction(aToZCocktailList));
    }

    if (event.target.value === 'DATE_SORT') {
      const newArryDate = cocktailList.sort(function (a, b) {
        return new Date(b.dateModified) - new Date(a.dateModified);
      });

      dispatch(dateSortAction(newArryDate));
    }
  };

  const handleOnChangeFilter = (event) => {
    setFilterIngredint(event.target.value);
  };

  const handleOnBlur = () => {
   

    dispatch(filteredListAction(filterIngredint));
  };

  return (
    <div className="sortFilterContainer">
      <div>
        <h3>filter by ingredint</h3>
        <TextField
          onBlur={handleOnBlur}
          onChange={handleOnChangeFilter}
          value={filterIngredint}
          id="outlined-basic"
          label="filter"
          variant="outlined"
        />
      </div>

      <div className="sortContainer">
        <h3>sort by</h3>

        <FormControl fullWidth={true}>
          <InputLabel id="demo-simple-select-label">SORT</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortOptsion}
            label="Age"
            onChange={handleOnChangeOptions}
          >
            <MenuItem value={'A_TO_Z'}>A TO Z</MenuItem>
            <MenuItem value={'DATE_SORT'}>Date</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default SortAndFilter;
