import axios from 'axios';

export const fetchRecipes = async (recipeName) => {
  const defoptions2 = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    mode: 'no-cors',
    params: { s: recipeName },
  };

  try {
    const response = await axios.get(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php',
      defoptions2
    );

    const data = response.data.drinks;

    return data;
  } catch (error) {
    console.log(error);
  }
};
