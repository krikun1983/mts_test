import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { isCheckEmail, isTitleEmails, isTitlePassword } from '../../constants/forms';
import useTypeSelector from '../../store/hooks/useTypeSelector';
import { adminShowOpen } from '../../store/reducers/adminShowReducer';

const Form = (): JSX.Element => {
  const dispatch = useDispatch();
  const { isAdminShow } = useTypeSelector(state => state.isAdminShow);
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

  const handlePasswordShow = (): void => {
    setPasswordShow(!passwordShow);
  };

  const blurHandler = (e: ChangeEvent<HTMLInputElement>): void => {
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(adminShowOpen());
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="email" className="form__email_label">
        Email: {emailDirty && emailError && <span>{emailError}</span>}
      </label>
      <input
        id="email"
        name="email"
        className={`form__email_input ${!emailError ? 'valid' : ''}`}
        type="email"
        value={email}
        onBlur={(e): void => blurHandler(e)}
        onChange={(e): void => emailHandler(e)}
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
        onBlur={(e): void => blurHandler(e)}
        onChange={(e): void => passwordHandler(e)}
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
