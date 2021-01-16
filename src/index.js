import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import GwakihotteokData from './service/gwakihotteok_data';

const gwakihotteokData = new GwakihotteokData();

ReactDOM.render(
  <React.StrictMode>
    <App gwakihotteokData={gwakihotteokData} />
  </React.StrictMode>,
  document.getElementById('root'),
);
