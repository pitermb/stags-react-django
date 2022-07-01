import { useContext } from "react";
import { Header } from "../../components/Header/Header";
import { AuthContext } from "../../contexts/auth/AuthContext";

export function Dashboard() {
  const auth = useContext(AuthContext);

  return (
    <div>
      <div>{<Header />}</div>

      <div>
        
      </div>
    </div>
  );
}
