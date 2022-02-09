import "./App.css";
import NavBar from "./Components/NavBar";
import CategoriesCards from "./Components/CategoriesCards";
import { Route, Routes } from "react-router-dom";
import RecipesCards from "./Components/RecipesCards";

function App() {
  return (
    <div className="App">
      <h1>Foodiez</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<CategoriesCards />} />
        <Route path="/recipes" element={<RecipesCards />} />
      </Routes>
    </div>
  );
}

export default App;
