import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import MyComponent from './components/MyComponent'

const name = "World";
const myHtml = (
  <React.Fragment>
    <h1>My Html</h1>
  </React.Fragment>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {myHtml}
    <h1>Hello {name}!</h1>
    <MyComponent/>
    <App />
  </React.StrictMode>
);

