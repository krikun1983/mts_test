import React from 'react';
import Form from '../../components/form';

const LoginPage = (): JSX.Element => {
  return (
    <div className="login-page">
      <div className="login-popup">
        <h2 className="login-popup__heading">sign in with</h2>
        <Form />
      </div>
    </div>
  );
};

export default LoginPage;
