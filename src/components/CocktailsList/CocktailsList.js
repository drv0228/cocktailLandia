import "./CocktailsList.scss";
import Cocktails from "../Cocktails/Cocktails";


const CocktailsList = ({ newCocktails, openDetails }) => {

    const displayCocktails = Array.isArray(newCocktails)
      ? newCocktails.map((cocktail) => (
          <Cocktails
            key={cocktail.idDrink} 
            cocktailId={cocktail.idDrink}
            cocktail={cocktail}
            image={cocktail.strDrinkThumb}
            name={cocktail.strDrink}
            openDetails={openDetails}
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
  