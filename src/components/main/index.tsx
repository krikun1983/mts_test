import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Path } from '../../constants/pages';
import Account from '../../pages/AccountPage';
import Dashboard from '../../pages/DashboardPage';
import Devices from '../../pages/DevicesPage';
import LoginPage from '../../pages/LoginPage';
import Settings from '../../pages/SettingsPage';
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
          <div className="main__content">
            <Switch>
              <Route exact path={Path.dashboard} component={Dashboard} />
              <Route exact path={Path.devices} component={Devices} />
              <Route exact path={Path.account} component={Account} />
              <Route exact path={Path.settings} component={Settings} />
            </Switch>
          </div>
        </div>
      )}
    </main>
  );
};

export default Main;
