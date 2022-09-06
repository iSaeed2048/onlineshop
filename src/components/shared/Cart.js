import React, { useContext } from "react";
// styles
import styles from "./Cart.module.css";
// context
import { CartContext } from "../../context/CartContextProvider";
// functions
import { nameShorter } from "../../helpers/functions";

const Cart = (props) => {
  const { image, title, price, quantity } = props.myData;
  const { dispatch } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <div className={styles.cart_image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.details}>
        <div>
          <h3 className={styles.title}>{nameShorter(title)}</h3>
          <p className={styles.price}>Price: ${price}</p>
          <p className={styles.price_total}>Total Price: ${price*quantity}</p>
        </div>
        <div className={styles.btns}>
          <button
            className={styles.btn_plus}
            onClick={() =>
              dispatch({ type: "INCREASE", payload: props.myData })
            }
          >
            +
          </button>
          <p className={styles.number_in_cart}>{quantity}</p>
          {quantity > 1 ? (
            <button
              className={styles.btn_decrease}
              onClick={() =>
                dispatch({ type: "DECREASE", payload: props.myData })
              }
            >
              -
            </button>
          ) : (
            <button
              className={styles.btn_remove}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: props.myData })
              }
            >
              trash
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
