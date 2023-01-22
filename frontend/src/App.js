import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

import CartDetails from "./components/CartDetails";
import Signup from "./pages/Signup";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import { useAuthContext } from "./hooks/useAuthContext";
import Orders from "./pages/Order";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!user ? <LoginPage /> : <Navigate to="/" />}
          />
          <Route
            path="/cart"
            element={user ? <CartDetails /> : <Navigate to="/" />}
          />
          <Route
            path="/orders"
            element={user ? <Orders /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
