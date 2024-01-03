import "./CocktailsItems.scss";
import { Link } from "react-router-dom";

const CocktailsItems = ({ cocktailId, cocktail, image, name, bornIn }) => {
  return (
    <>
     <div className="cocktails-items__section">
        <div className="image__container">
        <Link to={`/cocktail/${cocktailId}`} className="link__cocktails"><img
            src={image}
            alt={`A cocktail named ${name} from ${bornIn}`}
            className="cocktail__image"
          /></Link>
        </div>

        <div className="cocktail__details">
         
            <p className="cocktail__name">{name}</p>
        
          <p className="cocktail__bornIn">{bornIn}</p>
        </div>
      </div> 
    </>
  );
};

export default CocktailsItems;
