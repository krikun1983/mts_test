export type FormAddDevice = {
  name: string;
  ipAddress: string;
  type: string;
  location: string;
  coordinates: string;
  textarea: string;
  status?: string;
  date: string;
};

export type FormAddDevicesState = {
  formAddDevices: FormAddDevice[];
};
