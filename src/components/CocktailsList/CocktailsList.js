import "./CocktailsList.scss";
import Cocktails from "../Cocktails/Cocktails";


const CocktailsList = ({ newCocktails, openModal }) => {

    const displayCocktails = Array.isArray(newCocktails)
      ? newCocktails.map((cocktail) => (
          <Cocktails
            key={cocktail.idDrink} 
            cocktailId={cocktail.idDrink}
            cocktail={cocktail}
            image={cocktail.strDrinkThumb}
            name={cocktail.strDrink}
            openModal={openModal}
          />
        ))
      : null; 
  
    return (
      <section className="cocktails-section">
        <div className="cocktails-page__allcocktails">{displayCocktails}</div>
      </section>
    );
  };
  
  export default CocktailsList;
  