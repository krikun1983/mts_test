import React from 'react';

const FormSearch = (): JSX.Element => {
  return (
    <form className="form-device">
      <div className="form-device__field">
        <label className="form-name__label" htmlFor="name">
          Device name
        </label>
        <input className="form-name__input" id="name" type="text" />
        <label className="form-ip__label" htmlFor="ip">
          IP address
        </label>
        <input className="form-ip__input" id="ip" type="text" />
      </div>
      <button className="form-device__btn" type="button">
        Search
      </button>
    </form>
  );
};

export default FormSearch;
