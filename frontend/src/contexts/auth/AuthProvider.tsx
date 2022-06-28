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
        console.log('data authprovider ' + data);
        if (data) {
          setUser(data);
          console.log("setuser effect" + user);
          return navigate("/home");
        } else {
          console.log("setuser effect else" + user);
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
    setUser(null);
  };

  const setTokenAndUser = (token: string, user: User) => {
    console.log(token)
    localStorage.setItem("authToken", token);
    localStorage.setItem("lastUserLogged", user.id_person);
  };

  return (
    <AuthContext.Provider value={{ user, signin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
