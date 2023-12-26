import "./NavBar.scss";
import { Link } from "react-router-dom";

function NavBar() {
    return (
      <nav className="nav-bar">
        <div className="nav-bar__container1">
        <Link to="/" className="nav-bar__link">
            <p className="logo__app">CocktailLandia</p>
          </Link>
        <p className="nav-bar__link--two">Explore More...</p>
        </div>
        <div className="nav-bar__container2">
      
        </div>
      </nav>
    );
  }
  export default NavBar;
  
