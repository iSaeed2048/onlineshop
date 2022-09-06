import React, { createContext, useReducer } from "react";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const sumItems = (items) => {
  const itemsCooounter = items.reduce(
    (toootal, product) => toootal + product.quantity,
    0
  );
  const totaaal = items
    .reduce((tootaal, product) => tootaal + product.price * product.quantity, 0)
    .toFixed(2);

  return { itemsCounter: itemsCooounter, total: totaaal };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((i) => i.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...sumItems(state.selectedItems),
        checkout: false,
      };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (i) => i.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumItems(state.selectedItems),
      };
    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (i) => i.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;
      return {
        ...state,
        ...sumItems(state.selectedItems),
      };
    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (i) => i.id === action.payload.id
      );
      state.selectedItems[indexD].quantity--;
      return {
        ...state,
        ...sumItems(state.selectedItems),
      };
    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };
    case "CLEAR":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: false,
      };
    default:
      return state;
  }
};

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    //   <CartContext.Provider value={{ state, dispatch }}> Use this Line for New JS (ES6)
    <CartContext.Provider value={{ state: state, dispatch: dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
