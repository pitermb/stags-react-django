import { useContext } from "react";
import { AuthContext } from "../../contexts/auth/AuthContext";


export function Home() {
  const auth = useContext(AuthContext);
  console.log('data home ' + auth);

  return (
    <div>
      <h1>Ola {auth.user?.name}</h1>
    </div>
  );
}
