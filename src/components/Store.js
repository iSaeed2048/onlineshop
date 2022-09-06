import React, { useContext, useState } from "react";
// styles
import styles from "./Store.module.css";
// context
import { ProductsContext } from "../context/ProductsContextProvider";
// Components
import Product from "./shared/Product";

const Store = () => {
  const { productsSortAsc, productsSortDesc } = useContext(ProductsContext);
  const [sort, setSort] = useState("true");
  return (
    <div className={styles.container}>
      <div className={styles.select_container}>
        <span className={styles.sort_by}>Sort by:&nbsp;</span>
        <select
          onChange={(e) => setSort(e.target.value)}
          className={styles.select}
        >
          <option className={styles.options} value="true">Ascending </option>
          <option className={styles.options} value="false">Descending</option>
        </select>
      </div>
      {sort === "true" &&
        productsSortAsc.map((item) => (
          <Product key={item.id} productsData={item} />
        ))}
      {sort === "false" &&
        productsSortDesc.map((item) => (
          <Product key={item.id} productsData={item} />
        ))}
    </div>
  );
};

export default Store;
