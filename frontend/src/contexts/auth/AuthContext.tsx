import { createContext } from "react";
import { User } from "../../types/User";
import { UserRegister } from "../../types/UserRegister";
import { UserUpdateRequest } from "../../types/UserUpdate";

export type AuthContextType = {
  user: User | null;
  signin: (name: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (user: UserRegister) => Promise<boolean>;
  update: (user: UserUpdateRequest) => Promise<boolean>;
};

export const AuthContext = createContext<AuthContextType>(null!);
