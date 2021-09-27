import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { formAddDevicesAction } from '../../store/reducers/formAddDevicesReducer';

const FormDevices = (): JSX.Element => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [ipAddress, setIpAddress] = useState('');
  const [type, setType] = useState('Router');
  const [location, setLocation] = useState('');
  const [coordinates, setCoordinates] = useState('');
  const [textarea, setTextarea] = useState('');

  const reset = (): void => {
    setName('');
    setIpAddress('');
    setType('Router');
    setLocation('');
    setCoordinates('');
    setTextarea('');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(formAddDevicesAction({ name, ipAddress, type, location, coordinates, textarea }));
    reset();
  };

  return (
    <form className="form-devices" onSubmit={handleSubmit}>
      <h2 className="form-devices__heading">Add devices</h2>
      <div className="form-devices__body">
        <label className="form-devices__name" htmlFor="name">
          Name:
        </label>
        <input type="text" id="name" value={name} onChange={(e): void => setName(e.target.value)} />
        <label className="form-devices__ipAddress" htmlFor="ipAddress">
          IP-address:
        </label>
        <input type="text" id="ipAddress" value={ipAddress} onChange={(e): void => setIpAddress(e.target.value)} />
        <label className="form-devices__type" htmlFor="type">
          Type:
        </label>
        <select id="type" value={type} onChange={(e): void => setType(e.target.value)}>
          <option value="Router">Router</option>
          <option value="Virtual router">Virtual router</option>
          <option value="Switch">Switch</option>
          <option value="Server">Server</option>
        </select>
        <label className="form-devices__location" htmlFor="location">
          Location:
        </label>
        <input type="text" id="location" value={location} onChange={(e): void => setLocation(e.target.value)} />
        <label className="form-devices__name" htmlFor="coordinates">
          Coordinates:
        </label>
        <input
          type="text"
          id="coordinates"
          value={coordinates}
          onChange={(e): void => setCoordinates(e.target.value)}
        />
        <label className="form-devices__textarea" htmlFor="textarea">
          Comment:
        </label>
        <textarea id="textarea" value={textarea} onChange={(e): void => setTextarea(e.target.value)} />
        <div className="form-devices__bts">
          <button type="submit">Add</button>
          <button type="button" onClick={reset}>
            cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormDevices;
