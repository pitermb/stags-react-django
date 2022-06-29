import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./contexts/auth/RequireAuth";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Profile } from "./pages/Profile/Profile";
import { Register } from "./pages/Register/Register";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
