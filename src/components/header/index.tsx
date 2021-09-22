import React, { useState } from 'react';
import useTypeSelector from '../../store/hooks/useTypeSelector';
import logo from '../../assets/img/logo-mts.jpg';

const Header = (): JSX.Element => {
  const { isAdminShow } = useTypeSelector(state => state.isAdminShow);
  const [isMenuShow, setMenuShow] = useState<boolean>(false);

  return (
    <header className={`header ${!isAdminShow && 'header-show'}`}>
      <div className="header-container">
        <div className="logo">
          <img className="logo__img" src={logo} alt="mts logo" title="mts logo" />
          <h1 className="heading">МТС - быть лучше каждый день</h1>
        </div>
        <h2 className="admin__heading">Welcome to the admin panel! 😊</h2>
        <button type="button" onClick={(): void => setMenuShow(!isMenuShow)} className="dropdown">
          <div className={`dropdown__lines ${isMenuShow ? 'dropdown-active' : ''}`} />
        </button>
      </div>
    </header>
  );
};

export default Header;
