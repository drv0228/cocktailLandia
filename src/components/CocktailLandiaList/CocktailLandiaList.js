import "./CocktailLandiaList.scss";
import "../CocktailsItems/CocktailsItems";
import CocktailsItems from "../CocktailsItems/CocktailsItems";


const CocktailLandiaList = ({cocktails, openModal}) => {

  const displayCocktails = cocktails.map((cocktail) => (
    <CocktailsItems
      cocktailId={cocktail.id}
      cocktail={cocktail}
      image={cocktail.image}
      name={cocktail.name}
      bornIn={cocktail.original}
      openModal={openModal}
    />
  ));

  return (
  <section className="cocktailLandia-section">
     <div className="allcocktails__list">{displayCocktails}</div>
  </section>
  );
};

export default CocktailLandiaList;
