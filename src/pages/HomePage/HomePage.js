import "./HomePage.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/cocktailLandia-logo.svg";
import SearchBar from "../../components/SearchBar/SearchBar";
import CocktailLandiaList from "../../components/CocktailLandiaList/CocktailLandiaList";


const HomePage = ({ onSearch, refresh, cocktails, openModal }) => {
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
        
        <CocktailLandiaList cocktails={cocktails ?? []} refresh={refresh} openModal={openModal} />
     
    </main>
  );
};

export default HomePage;
