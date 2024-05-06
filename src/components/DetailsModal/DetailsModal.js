import React, { useEffect, useState } from "react";
import "./DetailsModal.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

const DetailslModal = ({ newCocktails, closeDetails }) => {
    const [foundResults, setFoundResults] = useState([]);
    const { cocktailId } = useParams();
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://www.thecocktaildb.com/api/json/v2/${apiKey}/lookup.php?i=${cocktailId}`;

    useEffect(() => {
        async function getCocktail() {
          try {
            const response = await axios.get(url);
            setFoundResults(response.data.drinks);
            console.log(foundResults);
          } catch (error) {
            console.error("axios call failed", error);
          }
        }
        getCocktail();
      }, [url, cocktailId]);

    const findCocktail = newCocktails.find((cocktail) => cocktail.idDrink == cocktailId);

    if (!findCocktail) {
        return <NotFoundPage />
    }

  return (
    <>
      <div className="modal-overlay">
        <div className="detail-modal">
        <button className="close-button" onClick={closeDetails}>
          <Link to="/" className="modal__link">
            {" "}
            X{" "}
          </Link>
        </button>
        <div className="detail-modal__icontainer"><img
        src={findCocktail?.strDrinkThumb}
        alt={`A cocktail named ${findCocktail?.strDrink}`}
        className="detail-modal__image" /></div>
      <div className="cocktail__details--modal">
        <p className="detail-modal__name">{findCocktail?.strDrink}</p>
       
        <h2>Ingredients that you need:</h2>
        <p className="cocktail__ingredients">{foundResults[0]?.strIngredient1}, {foundResults[0]?.strIngredient2}, {foundResults[0]?.strIngredient3}, {foundResults[0]?.strIngredient4}. {foundResults[0]?.strIngredient5}</p>
        <h2>Follow the next steps to prepare it:</h2>
        <p className="cocktail__instructions">{foundResults[0]?.strInstructions}</p>
        <a rel="noopener" href="https://www.youtube.com"><h2>See a video!</h2></a>
      </div>
        </div>
        </div>
</>
  );
};

export default DetailslModal;