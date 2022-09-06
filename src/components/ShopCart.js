import React, { useContext } from "react";
import styles from "./ShopCart.module.css";
// Components
import Cart from "./shared/Cart";
// context
import { CartContext } from "../context/CartContextProvider";
import { Link } from "react-router-dom";

const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <div className={styles.cart}>
        {state.selectedItems.map((i) => (
          <Cart key={i.id} myData={i} />
        ))}
      </div>
      {state.itemsCounter > 0 && (
        <div className={styles.total_container}>
          <div className={styles.text_go_to_left}>
            <p>
              <span className={styles.total_texts}>Total Items: </span>
              {state.itemsCounter}
            </p>
            <p>
              <span className={styles.total_texts}>Total Price:</span> ${state.total}
            </p>
          </div>
          <div className={styles.btns}>
            <button className={styles.btn_checkout} onClick={() => dispatch({ type: "CHECKOUT" })}>
              Checkout
            </button>
            <button className={styles.btn_clear} onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
          </div>
        </div>
      )}
      {state.checkout && (
        <div className={styles.cart_empty}>
          <h2>Checkedout successfully</h2>
          <Link to="/products">click for buy more...</Link>
        </div>
      )}
      {state.checkout === false && state.itemsCounter === 0 && (
        <div className={styles.cart_empty}>
          <h2>Clear successfully</h2>
          <Link to="/products">click for back to shop...</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
