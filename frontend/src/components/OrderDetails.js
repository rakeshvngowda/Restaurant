// import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

import { useAuthContext } from "../hooks/useAuthContext";
// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useOrderContext } from "../hooks/useOrderContext";

const OrderDeatils = ({ dish }) => {
  const { dispatch } = useOrderContext();
  const { user } = useAuthContext();

  if (!user) {
    return;
  }

  const handleClick = async () => {
    const response = await fetch("http://localhost:4000/orders/" + dish._id, {
      method: "DELETE",
      headers:{
        'Authorization': `Bearer ${user.token}`
      }
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_ORDER_DISH", payload: json.dish });
    }
  };

  const handleUpdateStatus = async (newStatus) => {
    try {
      const response = await fetch("http://localhost:3000/orders/" + dish._id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${user.token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });
      console.log(response.json());
    } catch (error) {
      console.log(error);
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
        <span className="material-symbols-outlined">{dish.status}</span>
      )}

      <button onClick={() => handleUpdateStatus("Declined")}>Decline</button>
      <button onClick={() => handleUpdateStatus("Accepted")}>Accept</button>
      <button onClick={() => handleUpdateStatus("Delieverd")}>
        Delievered
      </button>
    </div>
  );
};

export default OrderDeatils;
