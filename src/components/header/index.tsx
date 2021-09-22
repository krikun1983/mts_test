import React, { useState } from 'react';
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useTypeSelector from '../../store/hooks/useTypeSelector';
import logo from '../../assets/img/logo-mts.jpg';
import { headerMenu, pathHeaderMenu } from '../../constants/pages';
import { adminShowClose } from '../../store/reducers/adminShowReducer';

const Header = (): JSX.Element => {
  const dispatch = useDispatch();
  const { isAdminShow } = useTypeSelector(state => state.isAdminShow);
  const [isMenuShow, setMenuShow] = useState<boolean>(false);

  const handleAdminShow = (): void => {
    dispatch(adminShowClose());
  };

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
        <nav className={`header-nav ${isMenuShow ? 'header-nav-show' : ''}`}>
          <ul className="menu-header">
            {pathHeaderMenu.map((path: string, index: number): JSX.Element => {
              return (
                <li key={uuid()} className="menu-header__item">
                  <Link className="menu-header__link" to={path}>
                    {headerMenu[index]}
                  </Link>
                </li>
              );
            })}
            <li className="menu-header__item output" onClick={handleAdminShow} role="presentation">
              Output
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
