import "./CocktailsItems.scss";
import { Link } from "react-router-dom";

const CocktailsItems = ({ cocktailId, cocktail, image, name, bornIn, openModal}) => {
  return (
  <><div className="cocktails-items__section">
      {/* <Link to={`/cocktail/${cocktailId}`} className="link__cocktails"> */}
      <div className="image__container"><img
        src={image}
        alt={`A cocktail named ${name} from ${bornIn}`}
        className="cocktail__image" /></div>
      {/* </Link> */}
      <div className="cocktail__details">
        {/* <Link to={`/${cocktailId}`} className="link__cocktails"> */}
        <p className="cocktail__name">{name}</p>
        {/* </Link> */}
        <p className="cocktail__bornIn">{bornIn}</p>
      </div>
    </div></>
  );
};

export default CocktailsItems;