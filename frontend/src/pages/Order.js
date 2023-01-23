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
      const response = await fetch("http://localhost:4000/orders", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      const jsonDish = json.dish;
      let jsonData;
      if (user.email != "admin@gmail.com") {
        jsonData = jsonDish.filter((dish) => dish.email === user.email);
      } else {
        jsonData = jsonDish.filter((dish) => dish);
      }

      console.log(json);
      if (response.ok) {
        dispatch({ type: "SET_ORDER_DISHES", payload: jsonData });
      }
    };

    if (user) {
      fetchOrderDishes();
    }
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        <h2>Orders Page</h2>
        {dishes &&
          dishes.map((dish) => {
            return <OrderDeatils dish={dish} key={dish._id} />;
          })}
      </div>
    </div>
  );
};

export default Order;
