import React from 'react';
import Image from 'next/image';
import Input from '@molecules/Input';
import Button from '@molecules/button';

interface ILoginForm {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  handleLogin: () => void;
}

const LoginForm: React.FC<ILoginForm> = props => {
  const { email, setEmail, password, setPassword, handleLogin } = props;

  return (
    <div className="login">
      <div className="login__logo">
        <Image
          src="/assets/real-estate-logo.jpg"
          alt="login image"
          layout="fill"
        />
      </div>

      <Input placeholder="Email" value={email} onChange={setEmail} />
      <Input placeholder="Password" value={password} onChange={setPassword} />
      <Button text="Login" type="outline" onClick={handleLogin} />
    </div>
  );
};

export default LoginForm;
