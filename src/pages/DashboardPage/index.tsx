import React from 'react';

const Dashboard = (): JSX.Element => {
  return (
    <>
      <div className="dashboard-widgets">
        <figure className="dashboard-widget widget__devices">
          <figcaption>Devices</figcaption>
          <div>1</div>
        </figure>
        <figure className="dashboard-widget widget__up">
          <figcaption>UP</figcaption>
          <div>2</div>
        </figure>
        <figure className="dashboard-widget widget__down">
          <figcaption>DOWN</figcaption>
          <div>3</div>
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
            <tr>
              <td>Router</td>
              <td>15.02.21</td>
              <td className="status__up">UP</td>
            </tr>
            <tr>
              <td>Switch</td>
              <td>15.02.21</td>
              <td className="status__up">UP</td>
            </tr>
            <tr>
              <td>Server</td>
              <td>15.02.21</td>
              <td className="status__down">DOWN</td>
            </tr>
            <tr>
              <td>Virtual router</td>
              <td>15.02.21</td>
              <td className="status__down">DOWN</td>
            </tr>
            <tr>
              <td>Router</td>
              <td>15.02.21</td>
              <td className="status__down">DOWN</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
