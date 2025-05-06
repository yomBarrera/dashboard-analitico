import {FC, JSX, useReducer } from "react";
import { Context, Reducer } from "./";

export interface UiState { 
  rol: string;
 }

const INITIAL_STATE: UiState = {
  rol: 'user',
}

export interface PropsProvider { children: JSX.Element } {
}
export const Provider: FC<PropsProvider> = ({ children }) => {
  
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  
  const setRole = (rol: string) => {
    dispatch({ type: "UI - rol", payload: rol });
  }

  return (
    <Context.Provider value={{ ...state, setRole }}>
      {children}
    </Context.Provider>
  );
};