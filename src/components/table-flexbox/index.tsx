import React from 'react';
import uuid from 'react-uuid';
import useTypeSelector from '../../store/hooks/useTypeSelector';

const TableFlexbox = (): JSX.Element => {
  const { formAddDevices } = useTypeSelector(state => state.formAddDevices);
  return (
    <>
      <div className="table-container">
        <h2>Цифры и факты</h2>
        <div className="table-flexbox">
          <div className="block">
            <div className="block_text title">Device name</div>
            <div className="block_text title">IP-address</div>
            <div className="block_text title">Location (address)</div>
            <div className="block_text title">UP/DOWN</div>
          </div>
          {formAddDevices.map(({ name, ipAddress, location, status }) => {
            return (
              <div className="block" key={uuid()}>
                <div className="block_text">{name}</div>
                <div className="block_text">{ipAddress}</div>
                <div className="block_text">{location}</div>
                <div className="block_text">{status}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TableFlexbox;
