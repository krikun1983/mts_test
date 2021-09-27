import React from 'react';
import uuid from 'react-uuid';
import useTypeSelector from '../../store/hooks/useTypeSelector';

const Dashboard = (): JSX.Element => {
  const { formAddDevices } = useTypeSelector(state => state.formAddDevices);
  return (
    <>
      <div className="dashboard-widgets">
        <figure className="dashboard-widget widget__devices">
          <figcaption>Devices</figcaption>
          <div>{formAddDevices.length}</div>
        </figure>
        <figure className="dashboard-widget widget__up">
          <figcaption>UP</figcaption>
          <div>{formAddDevices.filter(item => item.status === 'up').length}</div>
        </figure>
        <figure className="dashboard-widget widget__down">
          <figcaption>DOWN</figcaption>
          <div>{formAddDevices.filter(item => item.status === 'down').length}</div>
        </figure>
      </div>
      <div className="dashboard-recent-events">
        <table>
          <caption>Последние события</caption>
          <thead>
            <tr>
              <th>Устройство</th>
              <th>Дата</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            {formAddDevices.slice(Math.max(formAddDevices.length - 5, 1)).map(({ type, date, status }) => {
              return (
                <tr key={uuid()}>
                  <td>{type}</td>
                  <td>{date}</td>
                  <td className={status === 'up' ? 'status__up' : 'status__down'}>{status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
