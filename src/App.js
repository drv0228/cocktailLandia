import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CocktailModal from "./components/CocktailModal/CocktailModal";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const url = "http://localhost:8080/cocktails";
  const url2 = "";

  useEffect(() => {
    async function getCocktails() {
      try {
        const response = await axios.get(url);
        setCocktails(response.data);
        // console.log(cocktails);
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
      const response = await axios.get(
        `http://localhost:8080/search?q=${query}`
      );
      setSearchResults(response.data);
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
                cocktails={searchResults.length > 0 ? searchResults : cocktails}
              />
            }
          />
          <Route path="/cocktail/:cocktailId"
          element={
            <CocktailModal 
            cocktails={searchResults.length > 0 ? searchResults : cocktails} 
            closeModal={closeModal}
            />
          }
          />
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
