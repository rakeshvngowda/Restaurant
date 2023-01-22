import { useReducer } from "react";
import { createContext } from "react";

export const OrderContext = createContext();

export const orderReducer = (state, action) => {
  switch (action.type) {
    case "SET_ORDER_DISHES":
      return { dishes: action.payload };
    case "CREATE_ORDER_DISH":
      return { dishes: [action.payload, ...state.dishes] };
    case "DELETE_ORDER_DISH":
      return {
        dishes: state.dishes.filter((d) => d._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const OrderContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, {
    dishes: null,
  });
  return (
    <OrderContext.Provider value={{ ...state, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};
