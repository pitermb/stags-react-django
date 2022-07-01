import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();
  const navigate = useNavigate();

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem("authToken");
      const storageUser = localStorage.getItem("lastUserLogged");

      if (storageData) {
        const data = await api.validateToken(storageData, storageUser);
        if (data) {
          setUser(data);
          return navigate("/home");
        } else {
          return navigate("/");
        }
      }
    };

    validateToken();
  }, []);

  const signin = async (name: string, password: string) => {
    const data = await api.signin(name, password);
    const person = data?.personLogged;
    const token = data?.tokenLogged;

    if (person) {
      setUser(person);
      setTokenAndUser(token, person);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/");
  };

  const setTokenAndUser = (token: string, user: User) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("lastUserLogged", user.id_person);
  };

  return (
    <AuthContext.Provider value={{ user, signin, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
