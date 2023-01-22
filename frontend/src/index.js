import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { DishesContextProvider } from "./context/DishesContext";
import { CartContextProvider } from "./context/CartContext";
import { OrderContextProvider } from "./context/OrderContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <OrderContextProvider>
      <CartContextProvider>
        <AuthContextProvider>
          <DishesContextProvider>
            <App />
          </DishesContextProvider>
        </AuthContextProvider>
      </CartContextProvider>
    </OrderContextProvider>
  </React.StrictMode>
);
