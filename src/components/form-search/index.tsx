import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { formSearchValueIpAddressAction, formSearchValueNameAction } from '../../store/reducers/formSearchReducer';

const FormSearch = (): JSX.Element => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [ipAddress, setIpAddress] = useState('');

  const reset = (): void => {
    setName('');
    setIpAddress('');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(formSearchValueNameAction(name));
    dispatch(formSearchValueIpAddressAction(ipAddress));
    reset();
  };

  return (
    <form className="form-device" onSubmit={handleSubmit}>
      <div className="form-device__field">
        <label className="form-name__label" htmlFor="name">
          Device name
        </label>
        <input
          className="form-name__input"
          id="name"
          type="text"
          value={name}
          onChange={(e): void => setName(e.target.value)}
        />
        <label className="form-ip__label" htmlFor="ip">
          IP address
        </label>
        <input
          className="form-ip__input"
          id="ip"
          type="text"
          value={ipAddress}
          onChange={(e): void => setIpAddress(e.target.value)}
        />
      </div>
      <button className="form-device__btn" type="submit">
        Search
      </button>
    </form>
  );
};

export default FormSearch;
