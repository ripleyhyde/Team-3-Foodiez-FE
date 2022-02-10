import recipes from "../dataRecipes";
import RecipesCard from "./RecipesCard";
import CheckBoxx from "./CheckBoxx";
import { Fragment } from "react";
import React, { useState } from "react";

function RecipesCards() {
  const [filteredarray, setFilteredArray] = useState(recipes);

  const recipesList = filteredarray.map((recipes) => (
    <RecipesCard recipes={recipes} />
  ));

  const handleFilters = (filters, category) => {
    if (filters.length === 0) setFilteredArray(recipes);
    else setFilteredArray(filters);
  };

  return (
    <Fragment>
      <CheckBoxx handleFilters={(filters) => handleFilters(filters)} />
      <div className="recipesCards">{recipesList}</div>
    </Fragment>
  );
}

export default RecipesCards;
