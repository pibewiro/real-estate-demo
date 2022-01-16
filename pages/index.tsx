import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import LoginForm from '@components/login/login-form';
import Loading from '@molecules/loading';

const index = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!email) return alert('Email required');
    if (!password) return alert('Password required');
    setLoading(true);
    setTimeout(function () {
      setLoading(false);
      router.push('/houses');
    }, 2000);
  };

  return (
    <React.Fragment>
      <Loading visible={loading} />
      <div className="home">
        <div className="home__image">
          <Image src="/assets/home-image.jpg" alt="Home Image" layout="fill" />
        </div>
        <div className="home__form">
          <LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default index;
