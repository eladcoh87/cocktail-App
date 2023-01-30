import {
  SEARCH_COCKTAIL,
  CHOOSEN_COCKTAIL,
  LAST_SEARCH,
  FILTER_LIST,
  A_TO_Z,
  DATE_SORT,
} from './constance';

export const searchRecipeAction = (recipe) => {
  return {
    type: SEARCH_COCKTAIL,
    payload: recipe,
  };
};

export const choosenCocktailAction = (id) => {
  return {
    type: CHOOSEN_COCKTAIL,
    payload: id,
  };
};

export const lastSearchAction = (term) => {
  return {
    type: LAST_SEARCH,
    payload: term,
  };
};

export const filteredListAction = (filterIngredint) => {
  return {
    type: FILTER_LIST,
    payload: filterIngredint,
  };
};

export const aToZAction = (sortedList) => {
  return {
    type: A_TO_Z,
    payload: sortedList,
  };
};
export const dateSortAction = (sortedList) => {
  return {
    type: DATE_SORT,
    payload: sortedList,
  };
};
