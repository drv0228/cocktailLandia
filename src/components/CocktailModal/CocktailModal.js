import React, { useEffect, useState } from "react";
import "./CocktailModal.scss";
import { Link } from "react-router-dom";

const CocktailModal = ({ cocktails, closeModal }) => {

  return (
    <>
      <div className="modal-overlay">
        <div className="cocktail_modal">
        <button className="close-button" onClick={closeModal}>
          <Link to="/" className="modal__link">
            {" "}
            X{" "}
          </Link>
        </button>
        </div>
        </div>
</>
  );
};

export default CocktailModal;