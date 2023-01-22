import { useReducer } from "react";
import { createContext } from "react";

export const DishesContext = createContext();

export const dishReducer = (state, action) => {
  switch (action.type) {
    case "SET_DISHES":
      return { dishes: action.payload };
    case "CREATE_DISH":
      return { dishes: [action.payload, ...state.dishes] };
    case "DELETE_DISH":
      return {
        dishes: state.dishes.filter((d) => d._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const DishesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dishReducer, {
    dishes: null,
  });

  return (
    <DishesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DishesContext.Provider>
  );
};
