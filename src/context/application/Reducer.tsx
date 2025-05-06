import {UiState} from './'

type UiAction =
  | { type: 'UI - rol', payload: string } 

export const Reducer = (state: UiState, action: UiAction): UiState => {
  switch (action.type) {
    case 'UI - rol':
      return {...state, rol: action.payload}
    default:
      return state
  }
}