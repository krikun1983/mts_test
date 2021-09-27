import { Path } from '../constants/pages';
import Account from '../pages/AccountPage';
import Dashboard from '../pages/DashboardPage';
import DevicesAddPage from '../pages/DevicesAddPage';
import Devices from '../pages/DevicesPage';
import FirstPage from '../pages/FirstPage';
import NotFoundPage from '../pages/NotFoundPage';
import Settings from '../pages/SettingsPage';

const routesConfig = [
  {
    path: `${Path.main}`,
    exact: true,
    component: FirstPage,
  },
  {
    path: `${Path.dashboard}`,
    exact: true,
    component: Dashboard,
  },
  {
    path: `${Path.devices}`,
    exact: true,
    component: Devices,
  },
  {
    path: `${Path.devicesAdd}`,
    exact: true,
    component: DevicesAddPage,
  },
  {
    path: `${Path.account}`,
    exact: true,
    component: Account,
  },
  {
    path: `${Path.settings}`,
    exact: true,
    component: Settings,
  },
  {
    path: '*',
    exact: false,
    component: NotFoundPage,
  },
];

export default routesConfig;
