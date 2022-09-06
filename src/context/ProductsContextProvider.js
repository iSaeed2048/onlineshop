import React, { useState, useEffect, createContext } from "react";

// API
import { getProductsSortAsc, getProductsSortDesc } from "../services/api";

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  const [productsSortAsc, setProductsSortAsc] = useState([]);
  const [productsSortDesc, setProductsSortDesc] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setProductsSortAsc(await getProductsSortAsc());
    };
    fetchAPI();
  }, []);
  useEffect(() => {
    const fetchAPI = async () => {
      setProductsSortDesc(await getProductsSortDesc());
    };
    fetchAPI();
  }, []);

  return (
    <ProductsContext.Provider value={{productsSortAsc, productsSortDesc}}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
