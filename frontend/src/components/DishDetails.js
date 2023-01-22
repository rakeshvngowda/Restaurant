import { useAuthContext } from "../hooks/useAuthContext";
// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useDishContext } from "../hooks/useDishContext";
import { useCartContext } from "../hooks/useCartContext";
import { useEffect } from "react";

const DishDeatils = ({ dish }) => {
  const { dispatch } = useDishContext();
  const { dispatch: catDispatch } = useCartContext();
  const { user } = useAuthContext();

  if (!user) {
    return;
  }

  const handleClick = async () => {
    const response = await fetch("http://localhost:4000/dishes/" + dish._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_DISH", payload: json.dish });
    }
  };

  const handleAddToCart = async () => {
    const { name, price } = dish;
    console.log(user.email);
    const email = user.email;

    const response = await fetch("http://localhost:4000/cart/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price, email }),
    });
    const json = await response.json();

    if (response.ok) {
      catDispatch({
        type: "SET_CART_DISHES",
        payload: { name, price, email },
      });
    }
  };

  return (
    <div className="workout-details">
      <h4>Dish: {dish.name}</h4>
      <p>
        <strong>Price (INR): </strong>
        {dish.price} Rs/-
      </p>

      <p>
        createdAt:{" "}
        {formatDistanceToNow(new Date(dish.createdAt), { addSuffix: true })}
      </p>
      {user.email != "admin@gmail.com" && (
        <span className="material-symbols-outlined" onClick={handleAddToCart}>
          Add To Cart
        </span>
      )}
      {user.email == "admin@gmail.com" && (
        <span
          className="material-symbols-outlined"
          onClick={() => handleClick(dish._id)}
        >
          delete
        </span>
      )}
    </div>
  );
};

export default DishDeatils;
