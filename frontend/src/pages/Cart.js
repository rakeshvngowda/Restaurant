import { useState } from "react";
import { useEffect } from "react";
import CartDeatils from "../components/CartDetails";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCartContext } from "../hooks/useCartContext";

const Cart = () => {
  const { dishes, dispatch } = useCartContext();
  const [newOrderDishes, setNewOrderDishes] = useState([]);

  const { user } = useAuthContext();

  const handleOrderCartItems = async () => {
    dishes.forEach((dish) => {
      updateOrderPage(dish);
      removeCartPage(dish);
    });
  };

  const updateOrderPage = async (recipe) => {
    const { name, price, email } = recipe;
    try {
      const response = await fetch("http://localhost:4000/orders/", {
        method: "POST",
        body: JSON.stringify({ name, price, email }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const removeCartPage = async (recipe) => {
    try {
      const response = await fetch("http://localhost:4000/cart/" + recipe._id, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const fetchCartDishes = async () => {
      const response = await fetch("http://localhost:4000/cart", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      const jsonDish = json.dish;
      const jsonData = jsonDish.filter((dish) => dish.email === user.email);
      console.log(json);
      if (response.ok) {
        dispatch({ type: "SET_CART_DISHES", payload: jsonData });
      }
    };

    if (user) {
      fetchCartDishes();
    }
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        <h2>Cart Deatails</h2>
        {dishes &&
          dishes.map((dish) => {
            return <CartDeatils dish={dish} key={dish._id} />;
          })}
        <button onClick={handleOrderCartItems}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
