import React from 'react';
import DevicesAdd from '../../components/devices-add';
import FormDevices from '../../components/form-devices';

const DevicesAddPage = (): JSX.Element => {
  return (
    <div className="devices-page">
      <FormDevices />
      <DevicesAdd />
    </div>
  );
};

export default DevicesAddPage;
