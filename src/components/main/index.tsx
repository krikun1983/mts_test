import React from 'react';
import LoginPage from '../../pages/LoginPage';
import useTypeSelector from '../../store/hooks/useTypeSelector';

const Main = (): JSX.Element => {
  const { isAdminShow } = useTypeSelector(state => state.isAdminShow);

  return <>{!isAdminShow && <LoginPage />}</>;
};

export default Main;
