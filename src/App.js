import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import CocktailsPage from "./pages/CocktailsPage/CocktailsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CocktailModal from "./components/CocktailModal/CocktailModal";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const apiKey = process.env.REACT_APP_API_KEY;
  const url = "http://localhost:8080/cocktails";
  const url2 = `https://www.thecocktaildb.com/api/json/v2/${apiKey}/filter.php?i=`;

  useEffect(() => {
    async function getCocktails() {
      try {
        const response = await axios.get(url);
        setCocktails(response.data);
       
      } catch (error) {
        console.error("axios call failed", error);
      }
    }
    getCocktails();
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`${url2}${query}`);
      setSearchResults(response.data.drinks);
   
    } catch (error) {
      console.error("Error searching for cocktails:", error);
    }
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                refresh={handleRefresh}
                onSearch={handleSearch}
                openModal={openModal}
                cocktails={cocktails}
              />
            }
          />
          <Route path="/cocktail/:cocktailId"
          element={
            <CocktailModal 
            cocktails={cocktails}
            closeModal={closeModal}
            />
          }
          />
          <Route path="/cocktails" element={ <CocktailsPage newCocktails={searchResults} onSearch={handleSearch} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {isModalOpen && (
          <CocktailModal />
        )}
      </BrowserRouter>
    </section>
  );
}

export default App;
