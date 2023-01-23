import { useEffect } from "react";
import DishDetails from "../components/DishDetails";
import DishForm from "../components/DishForm";
import { useAuthContext } from "../hooks/useAuthContext";

import { useDishContext } from "../hooks/useDishContext";

const Home = () => {
  const { dishes, dispatch } = useDishContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchDishes = async () => {
      const response = await fetch("http://localhost:4000/dishes", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      // console.log(json);
      if (response.ok) {
        dispatch({ type: "SET_DISHES", payload: json.dish });
      }
    };

    if (user) {
      fetchDishes();
    }
  }, [dispatch]);

  return (
    <div className="home">
      
      <div className="workouts">
      <h2>Home Page</h2>
        {dishes &&
          dishes.map((dish) => {
            return <DishDetails dish={dish} key={dish._id} />;
          })}

        {(user.email ==="admin@gmail.com") &&<DishForm />}
      </div>
    </div>
  );
};

export default Home;
