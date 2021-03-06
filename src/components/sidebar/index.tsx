import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import uuid from 'react-uuid';
import { pathSidebarMenu, sidebarMenu } from '../../constants/pages';
import { adminShowClose } from '../../store/reducers/adminShowReducer';

const Sidebar = (): JSX.Element => {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentPath = location.pathname;

  const handleAdminShow = (): void => {
    dispatch(adminShowClose());
  };

  return (
    <aside>
      <ul className="aside__list">
        {pathSidebarMenu.map((path: string, index: number): JSX.Element => {
          return (
            <li className="aside__item" key={uuid()}>
              <Link className={`aside__link ${currentPath.endsWith(path) ? 'aside__link_active' : ''}`} to={path}>
                {sidebarMenu[index]}
              </Link>
            </li>
          );
        })}
        <li className="aside__item output" onClick={handleAdminShow} role="presentation">
          Output
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
