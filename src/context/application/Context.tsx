import { createContext } from "react";
interface ContextProps {
  rol: string;
  setRole: (rol: string) => void;
}

export const Context = createContext({} as ContextProps)