import {FC, JSX, useReducer } from "react";
import { Context, Reducer } from "./";

export interface UiState { 
  isMenuOpen: boolean;
  isModalOpen: boolean;
  isLoading: boolean; 
 }

const INITIAL_STATE: UiState = {
  isMenuOpen: false,
  isModalOpen: false,
  isLoading: false,
}

export interface PropsProvider { children: JSX.Element } {
}
export const Provider: FC<PropsProvider> = ({ children }) => {
  
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  
  const setLoading = (isLoading: boolean) => {
    dispatch({ type: "UI - loading", payload: isLoading }); 
  }
  return (
    <Context.Provider value={{ ...state, setLoading }}>
      {children}
    </Context.Provider>
  );
};