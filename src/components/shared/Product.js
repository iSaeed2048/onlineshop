import React, { useContext } from "react";
import { Link } from "react-router-dom";
// styles
import styles from "./Product.module.css";
// functions
import {
  nameShorter,
} from "../../helpers/functions";
// context
import { CartContext } from "../../context/CartContextProvider";

const Product = (item) => {
  useContext(CartContext);

  return (
    <Link to={`/products/${item.productsData.id}`} className={styles.container}>
      <div className={styles.real_container}>
        <div className={styles.image_container}>
          <img  src={item.productsData.image} alt={item.productsData.title} />
        </div>
        <div>
          <h2 className={styles.product_title}>
            {nameShorter(item.productsData.title)}
          </h2>
          <p className={styles.product_price}>${item.productsData.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
