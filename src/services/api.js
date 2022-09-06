import axios from "axios";

const getProductsSortAsc = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};
const getProductsSortDesc = async () => {
  const response = await axios.get("https://fakestoreapi.com/products?sort=desc");
  return response.data;
};
export { getProductsSortAsc, getProductsSortDesc };
