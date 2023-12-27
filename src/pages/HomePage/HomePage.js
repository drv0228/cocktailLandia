import "./HomePage.scss";
import CocktailLandiaList from "../../components/CocktailLandiaList/CocktailLandiaList";
import CocktailsList from "../../components/CocktailsList/CocktailsList";

const HomePage = () => {
  return (
  <main>
    <CocktailLandiaList />
    <CocktailsList />
  </main>
  );
};

export default HomePage;
