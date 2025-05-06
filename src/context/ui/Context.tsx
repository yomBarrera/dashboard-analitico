import { createContext } from "react";
interface ContextProps {
  isMenuOpen: boolean;  
  isModalOpen: boolean;
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
}

export const Context = createContext({} as ContextProps)