import { User } from 'model/user';
import { Reducer } from 'redux';
import { LoginActionsType, ActionEnums } from './action';

export interface LoginState {
    user: User | undefined;
    error: string | undefined;
}

export const initialState = {
  user: undefined,
  error: undefined,
};

const loginReducer: Reducer<LoginState> = (state = initialState, action: LoginActionsType) => {
  switch (action.type) {
    case ActionEnums.LOGGED_IN:
      return {
        ...state,
        user: action.payload.user,
        error: undefined,
      };
    case ActionEnums.LOGIN_FAILED:
      return {
        ...state,
        user: undefined,
        error: action.payload.error,
      };
    case ActionEnums.LOGGED_OUT:
      return {
        ...state,
        user: undefined,
        error: undefined,
      };
    default:
      return state;
  }
};

export default loginReducer;
