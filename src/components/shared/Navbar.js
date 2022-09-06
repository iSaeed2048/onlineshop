import React, { useContext } from "react";
import { Link } from "react-router-dom";
// style
import styles from "./Navbar.module.css";
// context
import { CartContext } from "../../context/CartContextProvider";
// images
import ShopCart from "../../assets/images/shopcart.png";
const Navbar = () => {
  const { state } = useContext(CartContext);
  return (
    <div className={styles.container}>
      <Link className={styles.products_text} to="products">Products</Link>
      <div className={styles.cart}>
        <Link to="cart" className={styles.shopcart_link}>
          <img src={ShopCart} alt="Shopcart"/>
        </Link>
        <p className={styles.itemsCounter}>{state.itemsCounter}</p>
      </div>
    </div>
  );
};

export default Navbar;
