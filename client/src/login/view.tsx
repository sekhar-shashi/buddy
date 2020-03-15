import React, {
  useCallback,
  useState,
  useRef,
  ChangeEvent,
} from 'react';
import { User } from 'model/user';
import Input from 'components/input';
import Button from 'components/button';
import login from './login.service';

export type OnloginEvent = { user: User };
export type OnLogin = (event: OnloginEvent) => void;

export type OnloginErrorEvent = { error: string };
export type OnLoginError = (event: OnloginErrorEvent) => void;

export interface Props {
  onLogin?: OnLogin;
  onLoginError?: OnLoginError;
  className?: string;
}

const Login: React.FC<Props> = ({ onLogin, onLoginError, className = '' }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const formRef = useRef < HTMLFormElement | null >(null);

  const handleUsernameTextChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setUsername((e.target as HTMLInputElement).value);
    },
    [],
  );

  const handlePasswordTextChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword((e.target as HTMLInputElement).value);
    },
    [],
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (formRef.current?.checkValidity()) {
        try {
          const user = login(username, password);
          if (onLogin) {
            onLogin({ user });
          }
        } catch (error) {
          if (onLoginError) {
            onLoginError({ error });
          }
        }
      }
    },
    [username, password, onLogin, onLoginError],
  );

  return (
    <form action="post" ref={formRef} onSubmit={handleSubmit} className={className}>
      <Input type="text" value={username} onChange={handleUsernameTextChange} required />
      <Input type="password" value={password} onChange={handlePasswordTextChange} required />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Login;
