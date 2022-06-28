import { useContext } from "react";
import { AuthContext } from "../../contexts/auth/AuthContext";


export function Home() {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div>
      <h1>Ola </h1>
    </div>
  );
}
