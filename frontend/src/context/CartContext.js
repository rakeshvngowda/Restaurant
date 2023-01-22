import { useReducer } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART_DISHES":
      return { dishes: action.payload };
    case "CREATE_CART_DISH":
      return { dishes: [action.payload, ...state.dishes] };
    case "DELETE_CART_DISH":
      return {
        dishes: state.dishes.filter((d) => d._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    dishes: null,
  });
  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
