import { useState } from "react";

import { useAuthContext } from "../hooks/useAuthContext";
import { useDishContext } from "../hooks/useDishContext";

const DishForm = () => {
  const { dispatch } = useDishContext();
  const { user } = useAuthContext();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("Yu must be logged in");
      return;
    }

    const dish = { name, price };

    const response = await fetch("http://localhost:4000/dishes/", {
      method: "POST",
      body: JSON.stringify(dish),
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${user.token}`
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setName("");
      setPrice(0);
      setError(null);
      setEmptyFields([]);
      console.log("new workout added", json);
      dispatch({ type: "CREATE_DISH", payload: json.dish });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Dish</h3>

      <label>Excersize Title:</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        className={emptyFields.includes("name") ? "error" : ""}
      />

      <label>Load (in kg):</label>
      <input
        type="number"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        className={emptyFields.includes("price") ? "error" : ""}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default DishForm;
