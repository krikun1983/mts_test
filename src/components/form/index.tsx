import React, { ChangeEvent, useEffect, useState } from 'react';
import { isCheckEmail, isTitleEmails, isTitlePassword } from '../../constants/forms';

const Form = (): JSX.Element => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Email field cannot be empty');
  const [passwordError, setPasswordError] = useState('Password field cannot be empty');
  const [sendForm, setSendForm] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setSendForm(false);
    } else {
      setSendForm(true);
    }
  }, [emailError, passwordError]);

  const handlePasswordShow = () => {
    setPasswordShow(!passwordShow);
  };

  const blurHandler = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      default:
        setEmailDirty(false);
        setPasswordDirty(false);
    }
  };

  const emailHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
    if (!isCheckEmail.test(String(e.target.value).toLowerCase())) {
      setEmailError('Email is error');
    } else {
      setEmailError('');
    }
  };

  const passwordHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
    if (e.target.value.length < 6 || e.target.value.length > 25) {
      setPasswordError('Password is error. Less than 6 ch. and more than 25');
      if (!e.target.value) {
        setPasswordError('Password field cannot be empty');
      }
    } else {
      setPasswordError('');
    }
  };

  return (
    <form className="form" action="">
      <label htmlFor="email" className="form__email_label">
        Email: {emailDirty && emailError && <span>{emailError}</span>}
      </label>
      <input
        id="email"
        name="email"
        className={`form__email_input ${!emailError ? 'valid' : ''}`}
        type="email"
        value={email}
        onBlur={e => blurHandler(e)}
        onChange={e => emailHandler(e)}
        title={`${isTitleEmails}`}
        placeholder="Enter your email..."
        required
      />
      <label htmlFor="password" className="form__password_label">
        Password: {passwordDirty && passwordError && <span>{passwordError}</span>}
        <span
          onClick={handlePasswordShow}
          className={`password_icon ${passwordShow ? 'icon-show' : 'icon-close'}`}
          role="presentation"
        />
      </label>
      <input
        id="password"
        name="password"
        className={`form__password_input ${!passwordError ? 'valid' : ''}`}
        value={password}
        type={`${passwordShow ? 'text' : 'password'}`}
        onBlur={e => blurHandler(e)}
        onChange={e => passwordHandler(e)}
        title={`${isTitlePassword}`}
        placeholder="Enter your password..."
        required
      />

      <button className={`form__btn ${sendForm ? 'send' : ''}`} type="submit" disabled={!sendForm}>
        Log in
      </button>
    </form>
  );
};

export default Form;
