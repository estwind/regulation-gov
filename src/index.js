import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const history = createBrowserHistory({ window });
root.render(
  <React.StrictMode>
    <HistoryRouter history={history}>
    <App />
  </HistoryRouter>
  </React.StrictMode>
);

reportWebVitals();
