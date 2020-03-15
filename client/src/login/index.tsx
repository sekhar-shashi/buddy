import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import LoginActions from './action';
import LoginView, { OnLogin, OnLoginError } from './view';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const handleLogin: OnLogin = useCallback(
    (event) => {
      dispatch(LoginActions.Login(event));
    },
    [dispatch],
  );
  const handleLoginError: OnLoginError = useCallback(
    (event) => {
      dispatch(LoginActions.LoginFailed(event));
    },
    [dispatch],
  );
  return (
    <LoginView onLogin={handleLogin} onLoginError={handleLoginError} />
  );
};

export default Login;
