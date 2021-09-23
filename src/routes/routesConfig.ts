import { Path } from '../constants/pages';
import Account from '../pages/AccountPage';
import Dashboard from '../pages/DashboardPage';
import Devices from '../pages/DevicesPage';
import NotFoundPage from '../pages/NotFoundPage';
import Settings from '../pages/SettingsPage';

const routesConfig = [
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
