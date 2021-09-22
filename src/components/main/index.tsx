import React from 'react';
import LoginPage from '../../pages/LoginPage';
import useTypeSelector from '../../store/hooks/useTypeSelector';
import Sidebar from '../sidebar';

const Main = (): JSX.Element => {
  const { isAdminShow } = useTypeSelector(state => state.isAdminShow);

  return (
    <main>
      {!isAdminShow ? (
        <LoginPage />
      ) : (
        <div className="main__container">
          <Sidebar />
          <div className="main__content">1</div>
        </div>
      )}
    </main>
  );
};

export default Main;
