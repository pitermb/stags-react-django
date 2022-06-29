import { useContext } from "react";
import { AuthContext } from "../../contexts/auth/AuthContext";

export function Header() {
  const auth = useContext(AuthContext);

  return (
    <div>
      <h1>Ola {auth.user?.name}</h1>
    </div>
  );
}
