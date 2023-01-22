import { useEffect } from "react";
import CartDeatils from "../components/CartDetails";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCartContext } from "../hooks/useCartContext";

const Cart = () => {
  const { dishes, dispatch } = useCartContext();
  const { user } = useAuthContext();

  const handleOrderCartItems = () => {};

  useEffect(() => {
    const fetchCartDishes = async () => {
      const response = await fetch("http://localhost:4000/cart");
      const json = await response.json();
      console.log(json);
      if (response.ok) {
        dispatch({ type: "SET_CART_DISHES", payload: json.dish });
      }
    };

    if (user) {
      fetchCartDishes();
    }
  }, [dishes, dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {dishes &&
          dishes.map((dish) => {
            return <CartDeatils dish={dish} key={dish._id} />;
          })}
      </div>
    </div>
  );
};

export default Cart;
