import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'rsuite/dist/rsuite.min.css'; // Для стиля страниц
import App from './App';
import { CustomProvider } from 'rsuite';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <CustomProvider theme="dark">
    <App />
  </CustomProvider>
);

