// import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

import { useAuthContext } from "../hooks/useAuthContext";
// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useCartContext } from "../hooks/useCartContext";


const CartDeatils = ({ dish }) => {
  const { dispatch } = useCartContext();
  const { user } = useAuthContext();
  
  if (!user) {
    return;
  }

  const handleClick = async () => {
    const response = await fetch("http://localhost:4000/cart/" + dish._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_DISH", payload: json.dish });
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
      {
        user.email == "admin@gmail.com" && (
          <span className="material-symbols-outlined">
          Remove 
        </span>
        )
      }
      {user.email != "admin@gmail.com" && (
        <span className="material-symbols-outlined" onClick={handleClick}>
          delete
        </span>
      )}
    </div>
  );
};

export default CartDeatils;
