import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../../pages/Login/Login";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }: { children: JSX.Element | null }) => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate()

    if (!auth.user) {
        navigate('/')
        return <Login />;
    }

  return children;
};
