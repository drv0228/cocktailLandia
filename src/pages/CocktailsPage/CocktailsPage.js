import "./CocktailsPage.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/cocktailLandia-logo.svg";
import SearchBar from "../../components/SearchBar/SearchBar";
import CocktailsList from "../../components/CocktailsList/CocktailsList";


const CocktailsPage = ({ onSearch, refresh, newCocktails, openDetails }) => {
  return (
    <main>
      <div className="home-page__navbar">
      <div className="logo__container">
     <Link to="/" className="page__link" onClick={refresh}>
          <img
            className="logo__image"
            src={logo}
            alt={`Logo that represent the company website`}
          />
        </Link>
        <p className="logo__title">cocktailLandia</p></div>
        <SearchBar onSearch={onSearch} /></div>
        
        <CocktailsList onSearch={onSearch} newCocktails={newCocktails} refresh={refresh} openDetails={openDetails} />
     
    </main>
  );
};

export default CocktailsPage;