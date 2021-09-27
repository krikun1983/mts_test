import React from 'react';
import uuid from 'react-uuid';
import useTypeSelector from '../../store/hooks/useTypeSelector';

const DevicesAdd = (): JSX.Element => {
  const { formAddDevices } = useTypeSelector(state => state.formAddDevices);

  return (
    <>
      {formAddDevices.length !== 0 && (
        <div className="form-devices__table">
          <div className="form-devices__table__item title">
            <div>name</div>
            <div>ipAddress </div>
            <div>type</div>
            <div>location </div>
            <div>coordinates</div>
            <div>textarea</div>
          </div>

          {formAddDevices &&
            formAddDevices.map(({ name, ipAddress, type, location, coordinates, textarea }) => {
              return (
                <div className="form-devices__table__item" key={uuid()}>
                  <div>{name || '-//-'}</div>
                  <div>{ipAddress || '-//-'}</div>
                  <div>{type || '-//-'}</div>
                  <div>{location || '-//-'}</div>
                  <div>{coordinates || '-//-'}</div>
                  <div>{textarea || '-//-'}</div>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default DevicesAdd;
