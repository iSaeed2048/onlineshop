import React, { useContext } from "react";
import { useParams } from "react-router-dom";
// styles
import styles from "./ProductDetails.module.css";
// contsxt
import { ProductsContext } from "../context/ProductsContextProvider";
import { CartContext } from "../context/CartContextProvider";
// functions
import {
  nameShorterForTitle,
  isInCart,
  quantityCounter,
  descriptionShorterForDetails,
} from "../helpers/functions";

const ProductDetails = () => {
  const { productsSortAsc } = useContext(ProductsContext);
  const { state, dispatch } = useContext(CartContext);
  const thisProduct = productsSortAsc[useParams().id - 1];
  const { image, price, title, category, description, id } = thisProduct;
  return (
    <div className={styles.container}>
      <div className={styles.image_div}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.details_div}>
        <div className={styles.texts}>
          <p className={styles.category}>
            <span>Category: </span>
            {category}
          </p>
          <h2 className={styles.the_h2}>{nameShorterForTitle(title)}</h2>
          <p className={styles.description}>
            <span>Description: </span>
            {descriptionShorterForDetails(description)}
          </p>
        </div>

        <div className={styles.numberCounter_div}>
          <div>
            <p className={styles.price}>${price}</p>
          </div>
          <div className={styles.numebr_div}>
            {isInCart(state, id) ? (
              <button
                className={styles.btn_plus}
                onClick={() =>
                  dispatch({ type: "INCREASE", payload: thisProduct })
                }
              >
                +
              </button>
            ) : (
              <button
                className={styles.btn_add}
                onClick={() =>
                  dispatch({ type: "ADD_ITEM", payload: thisProduct })
                }
              >
                Add
              </button>
            )}
            {quantityCounter(state, id) > 0 && (
              <span className={styles.number_in_cart}>
                {quantityCounter(state, id)}
              </span>
            )}
            {quantityCounter(state, id) > 1 && (
              <button
                className={styles.btn_decrease}
                onClick={() =>
                  dispatch({ type: "DECREASE", payload: thisProduct })
                }
              >
                -
              </button>
            )}
            {quantityCounter(state, id) === 1 && (
              <button
                className={styles.btn_remove}
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: thisProduct })
                }
              >
                remove
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
