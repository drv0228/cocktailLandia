import React from "react";
import "./CocktailModal.scss";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

const CocktailModal = ({ cocktails, closeModal }) => {
    const { cocktailId } = useParams();

    const findCocktail = cocktails.find((cocktail) => cocktail.id === cocktailId);

    if (!findCocktail) {
        return <NotFoundPage />
    }

  return (
    <>
      <div className="modal-overlay">
        <div className="cocktail_modal">
        <button className="close-button" onClick={closeModal}>
          <Link to="/" className="modal__link">
            {" "}
            X{" "}
          </Link>
        </button>
        <div className="image__container--modal"><img
        src={findCocktail?.image}
        alt={`A cocktail named ${findCocktail?.name} from ${findCocktail?.bornIn}`}
        className="cocktail__image--modal" /></div>
      <div className="cocktail__details--modal">
        <p className="cocktail__name--modal">{findCocktail?.name}</p>
        <p className="cocktail__bornIn--modal">{findCocktail?.bornIn}</p>
        <h2>Ingredients that you need:</h2>
        <p className="cocktail__ingredients">{findCocktail?.ingredients}</p>
        <h2>Follow the next steps to prepare it:</h2>
        <p className="cocktail__instructions">{findCocktail?.instructions}</p>
        <a  rel="noreferrer" href={findCocktail?.video} target="_blank"><h2>See a video!</h2></a>
      </div>
        </div>
        </div>
</>
  );
};

export default CocktailModal;