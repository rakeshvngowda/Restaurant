import { useContext } from "react";
import { DishesContext } from "../context/DishesContext";


export const useDishContext = () => {
  const context = useContext(DishesContext);

  if (!context) {
    throw Error("useDishContext must be used inside an DishContextProvider");
  }
  
  return context;
};
