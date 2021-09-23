import React from 'react';
import { Route, Switch } from 'react-router-dom';
import uuid from 'react-uuid';
import LoginPage from '../../pages/LoginPage';
import routesConfig from '../../routes/routesConfig';
import useTypeSelector from '../../store/hooks/useTypeSelector';
import Routing from '../../types/routing';
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
          <div className="main__content">
            <Switch>
              {routesConfig.map((route: Routing): JSX.Element => {
                return <Route key={uuid()} path={route.path} exact={route.exact} component={route.component} />;
              })}
            </Switch>
          </div>
        </div>
      )}
    </main>
  );
};

export default Main;
