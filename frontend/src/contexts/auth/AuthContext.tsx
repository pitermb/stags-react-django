import { createContext } from "react";
import { User } from "../../types/User";
import { UserRegister } from "../../types/UserRegister";

export type AuthContextType = {
  user: User | null;
  signin: (name: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (user: UserRegister) => boolean;
};

export const AuthContext = createContext<AuthContextType>(null!);
