import "./CocktailLandiaList.scss";
import "../CocktailsItems/CocktailsItems";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/cocktailLandia-logo.svg";

const CocktailLandiaList = () => {
  return (
  <section className="cocktailLandia-section">
    <div className="logo__container">
     {/* <Link to="/" className="page__link"> */}
          <img
            className="logo__image"
            src={logo}
            alt={`Logo that represent the company website`}
          />
        {/* </Link> */}
        <p className="logo__title">cocktailLandia</p>
        </div>
        {/* <CocktailsItems /> */}
  </section>
  );
};

export default CocktailLandiaList;
