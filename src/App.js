import "./App.css";
import NavBar from "./Components/NavBar";
import CategoriesCards from "./Components/CategoriesCards";
import { Route, Routes } from "react-router-dom";
import RecipesCards from "./Components/RecipesCards";
import CreateCat from "./Components/CreateCat";
import CreateIng from "./Components/CreateIng";
import CreateRecipe from "./Components/CreateRecipe";

function App() {
  return (
    <div>
      <h5>Team Jank Proudly Presents...</h5>
      <h1>Foodiez!!</h1>

      <NavBar />
      <Routes>
        <Route path="*" element={<CategoriesCards />} />
        <Route path="/home" element={<CategoriesCards />} />
        <Route path="/recipes" element={<RecipesCards />} />
        <Route path="/ingredients/addIngredient" element={<CreateIng />} />
        <Route path="/categories/createcat" element={<CreateCat />} />
        <Route path="/recipes/createRecipe" element={<CreateRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
