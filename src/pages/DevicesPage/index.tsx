import React from 'react';
import { Link } from 'react-router-dom';
import FormSearch from '../../components/form-search';
import TableFlexbox from '../../components/table-flexbox';
import { Path } from '../../constants/pages';

const Devices = (): JSX.Element => {
  return (
    <div className="devices-container">
      <div className="devices">
        <Link className="devices__link" to={Path.devicesAdd}>
          Go to add
        </Link>
      </div>
      <FormSearch />
      <TableFlexbox />
    </div>
  );
};

export default Devices;
