import "./Cocktails.scss";
// import { Link } from "react-router-dom";

const Cocktails = ({ cocktailId, cocktail, image, name }) => {
  return (
    <>
     <div className="cocktails-items__section">
        <div className="image__container">
        {/* <Link to={`/cocktail/${cocktailId}`} className="link__cocktails"> */}
            <img
            src={image}
            alt={`A cocktail named ${name}`}
            className="cocktail__image"
          />
          {/* </Link> */}
        </div>

        <div className="cocktail__details">
         
            <p className="cocktail__name">{name}</p>
        </div>
      </div> 
    </>
  );
};

export default Cocktails;