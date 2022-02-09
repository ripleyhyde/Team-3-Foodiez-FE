import categories from "../dataCategories";
import CategoriesCard from "./CategoriesCard";

function CategoriesCards() {
  const categoriesList = categories.map((categories) => (
    <CategoriesCard key={categories.name} categories={categories} />
  ));

  return <div className="categoriesCards">{categoriesList}</div>;
}

export default CategoriesCards;
