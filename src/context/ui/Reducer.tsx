import {UiState} from './'

type UiAction =
  | { type: "UI - loading", payload: boolean } 

export const Reducer = (state: UiState, action: UiAction): UiState => {
  switch (action.type) {
    case 'UI - loading':
      return {...state, isLoading: action.payload}
    default:
      return state
  }
}