import { makeAutoObservable } from "mobx";
import api from "./api";

class IngredientStore {
  ingredients = [];
  constructor() {
    makeAutoObservable(this, {});
  }

  fetchIngredient = async () => {
    try {
      const response = await api.get("/ingredients");
      this.ingredients = response.data;
    } catch (e) {
      console.log(e);
    }
  };

  createIngredient = async (newingredients) => {
    try {
      const response = await api.post(
        "/ingredients/addIngredient",
        newingredients
      );

      this.ingredients.push(response.data);
    } catch (e) {
      alert("cannot create new ingredients");
      console.log(e);
    }
    // to do : call BE to create a ingredients
  };
}
const ingredientsStore = new IngredientStore();
categoriesStore.fetchCategory();
export default categoriesStore;
