export enum Path {
  main = '/',
  account = '/account',
  settings = '/settings',
  dashboard = '/dashboard',
  devices = '/devices',
  devicesAdd = '/devices/add',
}

export const pathHeaderMenu = [Path.account, Path.settings];
export const pathSidebarMenu = [Path.dashboard, Path.devices];

export const headerMenu = ['Account', 'Settings'];
export const sidebarMenu = ['Dashboard', 'Devices'];
