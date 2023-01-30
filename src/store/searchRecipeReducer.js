import {
  SEARCH_COCKTAIL,
  CHOOSEN_COCKTAIL,
  LAST_SEARCH,
  FILTER_LIST,
  A_TO_Z,
  DATE_SORT,
} from './constance';

const initalState = {
  searchRecipeList: [],
  chosenCocktail: {},
  lastSearchList: [],
  originalSearchList: [],
};

const searchRecipeReducer = (state = initalState, action) => {
  switch (action.type) {
    case SEARCH_COCKTAIL:
      return {
        ...state,
        searchRecipeList: action.payload,
        originalSearchList: action.payload,
        chosenCocktail: action.payload[0],
      };

    case CHOOSEN_COCKTAIL:
      const cocktail = state.searchRecipeList.find(
        (cocktail) => cocktail.idDrink === action.payload
      );

      return { ...state, chosenCocktail: cocktail };

    case LAST_SEARCH:
      const lastSearch = [...state.lastSearchList, action.payload];
      const lastSearchLimited = lastSearch.slice(0, 5);

      return { ...state, lastSearchList: lastSearchLimited };



    case FILTER_LIST:

        if(action.payload === "") {

            return {...state,searchRecipeList:[...state.originalSearchList]}

        }


      let newList = [];

      state.originalSearchList.forEach((cocktail) => {
        for (const [key, value] of Object.entries(cocktail)) {
          const ingredientNew = key.slice(0, -1);

          if (ingredientNew.toLowerCase() === 'stringredient' && value) {
            if (value.toLowerCase().includes(action.payload.toLowerCase())) {
              newList.push(cocktail);
            }
          }
        }
      });

      return { ...state, searchRecipeList: newList };

    case A_TO_Z:
      return { ...state, searchRecipeList: [...action.payload] };

    case DATE_SORT:
      return { ...state, searchRecipeList: [...action.payload] };

    default:
      return state;
  }
};

export default searchRecipeReducer;
