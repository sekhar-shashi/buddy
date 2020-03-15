import { Action } from 'redux';
import { User } from 'model/user';

export enum ActionEnums {
  'LOGGED_IN' = 'LOGGED_IN',
  'LOGIN_FAILED' = 'LOGIN_FAILED',
  'LOGGED_OUT' = 'LOGGED_OUT'
}

interface LoginActionPayload {
  user: User
}
interface LoginActionType extends Action<ActionEnums> {
  type: ActionEnums.LOGGED_IN,
  payload: LoginActionPayload
}
const Login = (payload: LoginActionPayload): LoginActionType => ({
  type: ActionEnums.LOGGED_IN,
  payload,
});

interface LoginFailedActionPayload {
  error: string
}
interface LoginFailedActionType extends Action<ActionEnums> {
  type: ActionEnums.LOGIN_FAILED,
  payload: LoginFailedActionPayload
}
const LoginFailed = (payload: LoginFailedActionPayload): LoginFailedActionType => ({
  type: ActionEnums.LOGIN_FAILED,
  payload,
});

interface LogoutActionType extends Action<ActionEnums> {
    type: ActionEnums.LOGGED_OUT
}
const Logout = (): LogoutActionType => ({
  type: ActionEnums.LOGGED_OUT,
});

const LoginActions = {
  Login,
  LoginFailed,
  Logout,
};

export default LoginActions;

export type LoginActionsType = ReturnType<typeof LoginActions[keyof typeof LoginActions]>;
