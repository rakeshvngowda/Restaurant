import { BrowserRouter, Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import DishDetails from "./components/DishDetails";
import CartDetails from "./components/CartDetails";
import Signup from "./pages/Signup";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route 
          path="/"
          element= {<DishDetails />}
          />
          <Route 
          path="/cart"
          element= {<CartDetails />}
          />
          <Route 
          path="/signup"
          element= {<Signup />}
          />
          <Route 
          path="/login"
          element= {<LoginPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
