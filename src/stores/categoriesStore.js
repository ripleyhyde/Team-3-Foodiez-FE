import { makeAutoObservable } from "mobx";
import api from "./api";

class CategoryStore {
  categories = [];
  constructor() {
    makeAutoObservable(this, {});
  }

  fetchCategory = async () => {
    try {
      const response = await api.get("/categories");
      this.categories = response.data;
    } catch (e) {
      console.log(e);
    }
  };

  createCategory = async (newcategories) => {
    try {
      const response = await api.post("/categories/createcat", newcategories);

      this.categories.push(response.data);
    } catch (e) {
      alert("cannot create new categories");
      console.log(e);
    }
    // to do : call BE to create a categories
  };
}
const categoriesStore = new CategoryStore();
categoriesStore.fetchCategory();
export default categoriesStore;
