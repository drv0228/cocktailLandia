import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  const [cocktails, setCocktails] = useState([]);

  const url = "http://localhost:8080/cocktails";

  useEffect(() => {
    async function getCocktails() {
      try {
        const response = await axios.get(url);
        setCocktails(response.data);
        // console.log(cocktails);
      } catch (error) {
        console.error("axios call failed", error);
      }}
    getCocktails();
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage refresh={handleRefresh} cocktails={cocktails}/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
