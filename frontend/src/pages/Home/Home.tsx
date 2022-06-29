import { useContext } from "react";
import { Header } from "../../components/Header/Header";
import { AuthContext } from "../../contexts/auth/AuthContext";


export function Home() {
  const auth = useContext(AuthContext);

  return (
    <div>
      {<Header/>}
    </div>
  );
}
