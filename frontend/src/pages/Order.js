import { useEffect } from "react";

import DishForm from "../components/DishForm";
import { useAuthContext } from "../hooks/useAuthContext";
import { useOrderContext } from "../hooks/useOrderContext";

// components

import OrderDeatils from "../components/OrderDetails";

const Order = () => {
  const { dishes, dispatch } = useOrderContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchOrderDishes = async () => {
      const response = await fetch("http://localhost:4000/orders");
      const json = await response.json();
      console.log(json);
      if (response.ok) {
        dispatch({ type: "SET_ORDER_DISHES", payload: json.dish });
      }
    };

    if (user) {
      fetchOrderDishes();
    }
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {dishes &&
          dishes.map((dish) => {
            return <OrderDeatils dish={dish} key={dish._id} />;
          })}
      </div>
    </div>
  );
};

export default Order;
