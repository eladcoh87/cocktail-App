import { Modal } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';
import './modal.scss';


const RecipeImage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const chosenCocktail = useSelector((state) => state.chosenCocktail);

  return (
    <div className="RecipeImageContainer">
      <img onClick={handleOpen} src={chosenCocktail.strDrinkThumb} alt="" />

      <h3>{chosenCocktail.strDrink}</h3>
      <p>{chosenCocktail.strInstructions}</p>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="modalContainer">
            <img src={chosenCocktail.strDrinkThumb} alt="" />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default RecipeImage;
