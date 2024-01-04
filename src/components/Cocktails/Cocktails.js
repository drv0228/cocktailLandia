import "./Cocktails.scss";
// import { Link } from "react-router-dom";

const Cocktails = ({ cocktailId, cocktail, image, name }) => {
  return (
    <>
     <div className="cocktails-page__section">
        <div className="cocktails-page__icontainer">
        {/* <Link to={`/cocktail/${cocktailId}`} className="link__cocktails"> */}
            <img
            src={image}
            alt={`A cocktail named ${name}`}
            className="cocktails-page__images"
          />
          {/* </Link> */}
        </div>

        <div className="cocktail__details">
         
            <p className="cocktails-page__names">{name}</p>
        </div>
      </div> 
    </>
  );
};

export default Cocktails;