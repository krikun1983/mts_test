import React, { useState } from 'react';
import { isCheckEmail, isCheckPassword, isTitleEmails, isTitlePassword } from '../../constants/forms';

const Form = (): JSX.Element => {
  const [passwordShow, setPasswordShow] = useState(false);

  const handlePasswordShow = () => {
    setPasswordShow(!passwordShow);
  };

  return (
    <form className="form" action="">
      <label htmlFor="email" className="form__email_label">
        Email:
      </label>
      <input
        id="email"
        name="email"
        className="form__email_input"
        type="email"
        pattern={`${isCheckEmail}`}
        title={`${isTitleEmails}`}
        placeholder="enter your email"
        required
      />
      <label htmlFor="password" className="form__password_label">
        Password:
        <span
          onClick={handlePasswordShow}
          className={`password_icon ${passwordShow ? 'icon-show' : 'icon-close'}`}
          role="presentation"
        />
      </label>
      <input
        id="password"
        name="password"
        className="form__password_input"
        type={`${passwordShow ? 'text' : 'password'}`}
        pattern={`${isCheckPassword}`}
        title={`${isTitlePassword}`}
        required
      />

      <button className="form__btn" type="submit">
        Log in
      </button>
    </form>
  );
};

export default Form;
